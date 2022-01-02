const names = ['Bob','Jack','Hmm']

const App = ()=> {
    const [name,setNames] = React.useState(names)

    React.useEffect(()=>{
        console.log(name)
    },[name]) // kalau itu dependency ny kosong artinya dia cuman jalan sekali, kecuali lu assign si nameke situ nanti dia bakal nge monitor ibaratnya kalau ada perubahan

    const addName = () => {
        const newName = document.querySelector('.input').value
        setNames([...name,newName])
    }

    return(
        <React.Fragment>
            {names.map((name,idx) => {
                return (
                    <div key={idx}>
                        <h2>{name}</h2>
                        <button>Delete this</button>
                    </div>
                )
            })}

            <div>
                <input className="input" type="text" placeholder="Input New Name"/>
                <button onClick={addName}>Add new Name</button>
            </div>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))