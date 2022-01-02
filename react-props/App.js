class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Item 
                    img={'https://m.media-amazon.com/images/I/41Nr5Cq9AdL.jpg'}
                    price={'Rp 12.000'}
                    name={'Up to 20% off on Alexander Del Rossa Robes'}
                ></Item>
                <Item 
                    img={'https://m.media-amazon.com/images/I/41Nr5Cq9AdL.jpg'}
                    price={'Rp 12.000'}
                    name={'Up to 20% off on Alexander Del Rossa Robes'}
                >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </Item>
                <Item 
                    img={'https://m.media-amazon.com/images/I/41Nr5Cq9AdL.jpg'}
                    price={'Rp 12.000'}
                    name={'Up to 20% off on Alexander Del Rossa Robes'}
                ></Item>

            </div>

        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'))