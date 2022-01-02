const App = () => {
    const [counter,setCounter] = React.useState(0)

    const addCounter = () => {
        setCounter(counter + 1)
    }

    return(
        <React.Fragment>
            <h1>Counter : {counter}</h1>
            <button onClick={addCounter}>click me</button>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))