var React = require('react')
import "../resources/css/biggerPhoto/biggerPhotoStyle.css"

export default class RegistrtionForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        this.props.returnInInitialStateVisible();
    }

    render(){
        return(
        <div className="container_big_photo">
            <div className="button_position">
                <button className="button_style" returnInInitialStateVisible={this.props.returnInInitialStateVisible} onClick={this.props.changeVisibleBiggerPhoto}>To Posts</button>
            </div>
            <img src={this.props.srcPhotoBigger} className="image_style_bigger_photo"/>
        </div>
        )
    }
}