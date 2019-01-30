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
        let listPlayersCopy = this.state.playersList.slice()
        listPlayersCopy[this.state.idPlayer] = data
        this.setState({
            playersList: listPlayersCopy,
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Terrain
                    playersList={this.state.playersList}
                    playerSelected={this.playerSelected}
                />
                {this.state.idPlayer && <SearchPlayer playerAttributed={this.playerAttributed}/> }
            </div>
        );
  }
}

export default App;
