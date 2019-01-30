import React, {Component} from 'react';

class Player extends Component {
    render() {
        return (
            <div className="playerName">
                {this.props.name}
            </div>
        );
    }
}

export default Player;
