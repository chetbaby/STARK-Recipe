import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { connect } from 'react-redux';
import * as mainActions from '../actions/mainActions'


let favoriteEl;

const mapStateToProps = (store) => ({
  userId: store.auth.userId,
  favoriteFoods: store.main.favoriteFoods
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteFoods: (userId) => dispatch(mainActions.fetchFavoriteFoods(userId)),
  removeFavFood: (favId) => dispatch(mainActions.removeFavFoodPost(favId))
});


class Favorite extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavoriteFoods(this.props.userId);
  }

  render() {
    favoriteEl = this.props.favoriteFoods.map((food) => {
      return <div className="favBar"><p>{food.label}</p><img src={food.img_url} /><button className="removeBtn" onClick={(e) => this.props.removeFavFood(food.id)}>Remove</button></div>
    });
    return(
      <div>
        <Collapsible trigger={<FavoriteBoxTrigger />} transitionTime={200}>
          <div>
            {favoriteEl}
          </div>
        </Collapsible>
      </div>
    )
  }
}

const FavoriteBoxTrigger = () => (
  <button className="rightMenuBtn">Favorite</button>
);


export default connect(mapStateToProps,mapDispatchToProps)(Favorite);
