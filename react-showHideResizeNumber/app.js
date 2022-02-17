const App = () => {
    const [size,setSize] = React.useState(window.innerWidth)
    const [hideStatus,setHideStatus] = React.useState(false)


    const HiddenMessage = () => {
        return (
            <div>
                Size : {size} PX
            </div>
        )
    }

    const resizeFunc = () => {
        setSize(window.innerWidth)
    }

    React.useEffect(()=>{
        window.addEventListener('resize',resizeFunc)

        return () => {
            window.removeEventListener('resize',resizeFunc)
        }
    },[])

    return(
        <div style=
        {{
            position:'absolute',
            left:'50%',
            top:'50%'
        }}>
            <button onClick={()=>{hideStatus == true ? setHideStatus(false) : setHideStatus(true)}}>Show/Hidden Message</button>
            {hideStatus && <HiddenMessage />}
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))