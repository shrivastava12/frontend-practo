import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { CheckCircle, Edit } from '@material-ui/icons';
import axios from 'axios';
import { CircularProgress, Grid, IconButton, Tooltip } from '@material-ui/core';
import apiAddress from '../config/apiAddress';

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 480,
		minHeight: 400
	},
});

export default function MyDataTable() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [count, setCount] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [loading, setLoading] = React.useState(false);

	const [patientColumns, setPatientColumns] = React.useState([])
	const [patients, setPatients] = React.useState([])

	const user = JSON.parse(localStorage.getItem('user'));
	const token = localStorage.getItem('token')
	const options = {
		headers:{
			'Content-Type':'application/json',
			'authorizationtoken':`Bearer ${token}`
		}
	};

	const fetch = async () => {
		setLoading(true);
		const { data } = await axios.get(`${apiAddress}/compounders`, options,{ params: { page: page + 1, limit: rowsPerPage } })

		if (data.data.results.length > 0) {
			const excludeColumn = ['_id', "__v", "reports"]
			const columns = Object.keys(data.data.results[0]).filter(col => (!excludeColumn.includes(col)))
			setPatientColumns(columns)
			setPatients(data.data.results)
			setCount(data.data.count)
		}
		setLoading(false);
	}

	React.useEffect(() => {
		fetch()
	}, [page, rowsPerPage])

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const checkPatient = async (id, value) => {
		console.log(id, value)
		await axios.patch(`${apiAddress}/compounders/${id}`, { status: value })
		await fetch()
	}

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container} >
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{patientColumns.map((column, index) => (
								<TableCell
									key={index}
								>
									{column}
								</TableCell>
							))}
							<TableCell width="140">
								action
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							loading === true ?
								<TableRow >
									<TableCell colSpan={patientColumns.length + 1} style={{ borderBottom: 'none' }} >
										<h6 align="center">
											<CircularProgress />
										</h6>
									</TableCell>
								</TableRow>
								:
								patients.length > 0 &&
								patients.map((patient) => {
									return (
										<TableRow hover>
											{
												patientColumns.map((column, index) => {
													const value = patient[column]
													return (
														<TableCell key={`${column}${Math.random()}`}>
															{typeof value === 'boolean' ? `${value}` : value}
														</TableCell>
													)
												})
											}
											<TableCell >
												<Grid container>
													<Grid item xs={6}>
														{
															user.permissions.includes('edit_compounder') ? (<IconButton>
																<Edit />
															</IconButton>) : null
														}
														
													</Grid>
													<Grid item xs={6}>
														<Tooltip title="click to mark patient as completed">
															<IconButton onClick={e => checkPatient(patient._id, !patient.status)}>
																{
																	patient.status === true ?
																		<CheckCircle style={{ color: "green" }} />
																		: <CheckCircle />
																}
															</IconButton>
														</Tooltip>
													</Grid>
												</Grid>
											</TableCell>
										</TableRow>
									)
								})
						}

					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 15, 25, 100]}
				component="div"
				count={count}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
