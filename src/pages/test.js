
const abc = [
    {id:'abc'},
    {id:'bcd'}
]

const a =  abc.map(d => {
    return {
        ...d,title:'bhj'
    }
})

console.log(a)