import React, {Component} from 'react';
import Player from './player'

class Terrain extends Component {
    constructor(){
        super()
        this.state = {
            playerSelected: null,
        }
        this.playerSelected = this.playerSelected.bind(this)
    }

    playerSelected(event){
        this.setState({
            playerSelected: event.target.parentNode.id
        })
        this.props.playerSelected(event.target.parentNode.id)
    }


    render() {
        const players = this.props.playersList.map( (player, index) =>
            <div key={index} id={index}>
                {player && <Player name={player.player_name}/>}
                <input type={'button'} value={'Choose it'} onClick={this.playerSelected}/>
            </div>
        )
        return (
            <div className="terrain">
                { players }
            </div>
        );
    }
}

export default Terrain;
