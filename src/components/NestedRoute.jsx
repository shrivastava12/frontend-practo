import React from 'react';
import { ListItem, ListItemIcon, ListItemText, List, Collapse, Link } from "@material-ui/core";
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, Inbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons";
import { Link as RouterLink } from 'react-router-dom'
import { useState } from "react";
import PaymentIcon from '@material-ui/icons/Payment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const NestedRoute = ({ item }) => {
	const { items: children } = item;
	const [open, setOpen] = useState(true);
	console.log(children[0])

	const handleClick = () => {
		setOpen((prev) => !prev);
	};
	return (
		<>

			<ListItem onClick={handleClick}>
				<ListItemIcon><PaymentIcon></PaymentIcon></ListItemIcon>
				<ListItemText primary={item.title} />
				{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					
					<Link color="inherit" underline='none' component={RouterLink} to={`/${item.title}/${children[0]}`} >
						<ListItem button style={{ paddingLeft: '25px' }}>
							<ListItemIcon>
								<ThumbUpIcon/>
							</ListItemIcon>
							<ListItemText primary={children[0]} />
						</ListItem>
					</Link>
				</List>
			</Collapse>
		</>
	);
};

export default NestedRoute;