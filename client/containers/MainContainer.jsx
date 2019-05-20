//importing modules/packages/////////////////////////
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as mainActions from '../actions/mainActions'
import { Redirect } from 'react-router-dom';
//importing components//////////////////////////////
import Search from '../components/Search.jsx';
import BoxArea from '../components/BoxArea.jsx';
import RightMenu from '../components/RightMenu.jsx'
//mapping state and action creators to props//////////////////////////
const mapStateToProps = (store) => ({
  searchStr: store.main.searchStr,
  searchResults: store.main.searchResults,
  cardClicked: store.main.cardClicked,
  userId: store.auth.userId,
  userName: store.auth.userName,
  favoriteFoods: store.auth.favoriteFoods
})

const mapDispatchToProps = (dispatch) =>({
  updateSearchStr: (searchStr) => {dispatch(mainActions.updateSearchStr(searchStr))},
  onCardClicked: (cardId) => {dispatch(mainActions.onCardClicked(cardId))},
  callSearchStr: (searchStr) => {
    return fetch('http://localhost:3000/search',{
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({search: searchStr})
    })
    .then(response => response.json())
    .then(response => dispatch(mainActions.callSearchStr(response)));
  },
  fetchFavoriteFoods: (userId) => dispatch(mainActions.fetchFavoriteFoods(userId))
});

//MainContainer being created
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.cardClicked === true){
      return <Redirect to='/selectedCard'></Redirect>
    } else
    return (
      <div>
      <div className="headerName"> 
      <h1 className="welcomeHeader">Welcome to BLISSEY recipes tracker {this.props.userName}!</h1>
      </div>
        <Search
          searchStr={this.props.searchStr}
          updateSearchStr={this.props.updateSearchStr}
          callSearchStr={this.props.callSearchStr}
        />
        <BoxArea searchResults={this.props.searchResults} onCardClicked={this.props.onCardClicked} />
        <RightMenu />
      </div>

    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);
