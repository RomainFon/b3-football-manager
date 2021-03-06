import React, { Component } from 'react';
import './App.css';
import Terrain from './components/terrain';
import SearchPlayer from './components/searchPlayer';

class App extends Component {
    constructor(){
        super()
        let listPlayers = []
        for(let i = 0; i < 11; i++){
            listPlayers[i] = ''
        }
        this.state = {
            idPlayer : null,
            playersList : listPlayers
        }
        this.playerSelected = this.playerSelected.bind(this)
        this.playerAttributed = this.playerAttributed.bind(this)
    }

    playerSelected(data){
        this.setState({
            idPlayer: data,
        })
    }

    playerAttributed(data){
        let playerInput = '.player'+this.state.idPlayer
        document.querySelector(playerInput+' input').classList.remove("selected")
        document.querySelector(playerInput+' input').classList.add("attributed")
        let listPlayersCopy = this.state.playersList.slice()
        listPlayersCopy[this.state.idPlayer] = data
        this.setState({
            playersList: listPlayersCopy,
        })
    }

    render() {
        return (
            <div className="App">
                <div className={'contentTerrain'}>
                    <Terrain
                        playersList={this.state.playersList}
                        playerSelected={this.playerSelected}
                    />
                </div>
                {this.state.idPlayer && <div className={'contentSearchPlayer'}><SearchPlayer playerAttributed={this.playerAttributed}/></div> }
            </div>
        );
  }
}

export default App;
