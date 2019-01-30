import React, {Component} from 'react';

class Player extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="player">
                {this.props.name}
            </div>
        );
    }
}

export default Player;
