const App = () => {
    const [count,setCount] = React.useState(0)

    console.log('counter called')
    return(
        <div>
            Counter : {count}
            <button onClick={() => {setCount(prevState => {return prevState + 1} )}}>Click Me</button>
            
            <UsersData />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))