class Item extends React.Component{
    constructor(){
        super()
    }

    render(){
        const {img,price,name,children} = this.props
        console.log(this.props)
        return(
            <div className="item-container">
                <div className="item-img">
                    <img src={img}></img>
                </div>
                <div className="item-info">
                    <div className="item-info--price">{price}</div>
                    <div className="item-info--name">{name}</div>
                    {children}
                </div>
            </div>
        )
    }
}