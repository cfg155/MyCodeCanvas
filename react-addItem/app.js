const App = () => {
    const [data,setData] = React.useState([])

    const submitHandle = (e) => {
        e.preventDefault()

        const text = document.getElementById('text')
        setData([...data,text.value])
    }

    const TextItem = () => {
        return <div>
            {data.map((item,index) => {
                return (
                    <div key={index}>
                        {item}
                        <br/>
                    </div>
                )
            })}
        </div>
    }

    return(
        <React.Fragment>
            <form onSubmit={submitHandle}>
                <input type="text" id="text"/>
                <input type="submit" />
            </form>
            <hr></hr>
            <TextItem/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))