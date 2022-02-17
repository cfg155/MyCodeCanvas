const UseFetch = () => {
    const [data,setData] = React.useState([])
    const [loading,setLoading] = React.useState(true)

    const getData = async () => {
        const fetchData = await fetch('https://raw.githubusercontent.com/cfg155/Dummy_APi/development/userProfile.json')
        const response = await fetchData.json()

        setLoading(false)
        setData(response)
        console.log('users called again')
    }

    React.useEffect(() => {
        getData()
    },[])

    return {loading,data}
}

const SingleUser = ({firstName}) => {
    return (
        <h2>{firstName}</h2>
    )
}


const Users = React.memo(({userData}) => {
    console.log(userData)
    return userData.map(user => {
        return <SingleUser {...user} />
    })
})

const UsersData = () => {
    const {loading,data} = UseFetch()

    return(
        <React.Fragment>
            {loading ? 'loading' : <Users userData={data} />}
        </React.Fragment>
    )
}