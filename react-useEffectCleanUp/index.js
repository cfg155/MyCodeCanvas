const App = () => {
    const [state,setState] = React.useState(false)
    const x = true

    React.useEffect(
        () => {
            if(x){
                setState(true)
            }

            console.log(state)
        }
    ),[state]

    const clickHandler = () => {
        console.log('tested')
        setState(false)
    }

    return(
        <div>
            {state && 'hahah'}
            <button onClick={() => {clickHandler()}}>Click me !</button>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))