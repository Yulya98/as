var React = require('react')
import "../resources/css/multiAlbumStyle/multiAlbumStyle.css"

export default class MultiAlbum extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.componentWillMount(this.props.flagForCheckPageCommentsOrProfile);
        setTimeout(() => {this.props.getAlbum(this.props.activeUserId)}, 4000);
    }

    componentWillUnmount(){
        this.props.returnInInitialState();
    }

    render(){
        if(this.props.albums.length !=0) {
            return (
                <div>
                    <div className="position_inputs">
                        <input className="edit_input" value={this.props.nameOfNewAlbum} onChange={this.props.changeNewAlbumName}/>
                        <div className="position_button"><button className="edit_button" onClick={() => this.props.addAlbum(this.props.activeUserId,this.props.nameOfNewAlbum)}>Add Album</button></div>
                    </div>
                    <div className="position_albums">{this.props.albums.map(item => <a href="#" onClick={() => this.props.changeVisibleMultiAlbums(item.idAlbum)}>{item.nameAlbum}</a>)}</div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="position_inputs_mimi">
                        <input className="edit_input" value={this.props.nameOfNewAlbum} onChange={this.props.changeNewAlbumName}/>
                        <div className="position_button_mini"><button className="edit_button" onClick={() => this.props.addAlbum(this.props.activeUserId,this.props.nameOfNewAlbum)}>Add Album</button></div>
                    </div>
                    <div className="without_album">
                        You haven't albums.
                    </div>
                </div>
            )
        }
    }
}