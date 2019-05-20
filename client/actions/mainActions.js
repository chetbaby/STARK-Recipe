import * as types from '../constants/actionTypes';

export const updateSearchStr = (searchStr) => ({
  type: types.UPDATE_SEARCH_STR,
  payload: searchStr
})

export const callSearchStr = (searchResults) => ({
  type: types.CALL_SEARCH_STR,
  //this is where the result of calling thunk is stored
  payload: searchResults
});

export const changePage = (id) => ({
  type: types.CHANGE_PAGE,
  payload: id
});

export const changeHasBeenClicked = () => ({
  type: types.CHANGE_HAS_BEEN_CLICKED
});

export const changeFavoriteFoods = (newFavorite) => ({
  type: types.CHANGE_FAVORITE_FOODS,
  payload: newFavorite
});

export const getFavoriteFoods = (foodArr) => ({
  type: types.GET_FAVORITE_FOODS,
  payload: foodArr
});

export const removeFavFood = (favId) => ({
  type: types.REMOVE_FAV,
  payload: {favId}
})


//SENDS NEW FAV FOOD TO DB AND RENDERS NEW FOOD
export const postFavoriteFoods = (foodObject, userId) => {
  return function(dispatch){
    return fetch('http://localhost:3000/addFav',{
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(foodObject)
    })
    .then(response => {
      dispatch(fetchFavoriteFoods(userId));
    });
  }

}

//SENDS NEW FAV FOOD TO DB AND RENDERS NEW FOOD
export const removeFavFoodPost = (favId) => {
  return function(dispatch){
    return fetch('http://localhost:3000/removeFav',{
      method: 'DELETE',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ id: favId })
    })
    .then(response => {
      dispatch(removeFavFood(favId));
    });
  }

}

export const addToShoppingCart = (newObj) => ({
  type: types.ADD_TO_SHOPPING_CART,
  payload: newObj
});

export const fetchFavoriteFoods = (userId) => {
  return function(dispatch) {
    fetch(`http://localhost:3000/favorite/${userId}`, {
      method: "GET",
    })
    .then(response => response.json())
    .then(response => {
      dispatch(getFavoriteFoods(response))
    });
  }
}
export const connectToRecipe = (newRecipe) => ({
  type: types.CONNECT_TO_RECIPE,
  payload: newRecipe
});

export const onCardClicked = (cardId) => ({
  type: types.ON_CARD_CLICKED,
  payload: cardId
});

export const getShoppingList = (shoppingList) => ({
  type:types.GET_SHOPPING_LIST
});

export const backButtonClicked = () => ({
  type: types.BACK_BUTTON_CLICKED
})
