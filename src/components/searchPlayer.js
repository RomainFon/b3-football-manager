import React, {Component} from 'react';

class SearchPlayer extends Component {
    constructor(){
        super()
        this.state = {
            data : null
        }
        this.searchPlayer = this.searchPlayer.bind(this)
    }

    searchPlayer(event){
        if(event.target.value.length > 3){
            const playerName = event.target.value
            const key = "eb7490e0ca3a3d75eab567df34d6b3bce6f747b8b30c8bdeee27f52a1ed3b150"
            const url = "https://allsportsapi.com/api/football/?&met=Players&playerName=" + playerName + "&APIkey=" + key
            fetch(url).then(rawData => {
                rawData.json().then(value => {
                    this.setState({
                        data: value
                    })
                })
            })
        }
    }

    attributePlayer(data){
        this.props.playerAttributed(data)
    }

    resultPlayer(){
        let listRenderPlayers = []
        if(this.state.data !== null){
            const maxPlayerRender = Math.min(this.state.data.result.length, 5)
            for(let i = 0; i < maxPlayerRender; i++){
                const htmlRender = <div key={i} className={'player'} onClick={() => this.attributePlayer(this.state.data.result[i])}>{ this.state.data.result[i].player_name }</div>
                listRenderPlayers.push(htmlRender)
            }
        }
        return listRenderPlayers
    }

    render() {
        return (
            <div className="searchPlayer">
                <div className={'selectPlayer'}>
                    <label>Sélectionner votre joueur</label>
                    <input type={'text'} onChange={this.searchPlayer}/>
                </div>
                <div className={'listRenderPlayers'}>
                    { this.resultPlayer() }
                </div>
            </div>
        );
    }
}

export default SearchPlayer;
