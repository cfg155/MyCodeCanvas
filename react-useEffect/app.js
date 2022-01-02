const App = () => {
    const [time,setTime] = React.useState(10)
    // first version
    React.useEffect(()=> {
        const timeFunc = () => {
            const isRunning = setTimeout(() => {
                if(time <=0){
                    clearTimeout(isRunning)
                    return
                }

                setTime((t)=> t-1)
            }, 1000);
        }

        timeFunc()
    })

    return (
        <React.Fragment>
            <h1>Time : {time}</h1>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))