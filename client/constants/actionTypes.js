/*
action type format

(action being performed)_(action target)[_data type]
*/

//ACTION TYPES FOR AUTH REDUCER
export const UPDATE_USERNAME_STR = "UPDATE_USERNAME_STR";
export const UPDATE_PASSWORD_STR = "UPDATE_PASSWORD_STR";
export const IS_LOGIN= "IS_LOGIN";
export const SIGNUP_ONCLICK = "SIGNUP_ONCLICK";

//ACTION TYPES FOR MAIN REDUCER
export const UPDATE_SEARCH_STR = "UPDATE_SEARCH_STR"; //line 68 of oldApp
export const CALL_SEARCH_STR = "CALL_SEARCH_STR"; //line 34 of oldApp
export const CHANGE_PAGE = "CHANGE_PAGE"; //line 74 of oldApp
export const CHANGE_HAS_BEEN_CLICKED = "CHANGE_HAS_BEEN_CLICKED"; //should change line 27 of oldApp
export const CHANGE_FAVORITE_FOODS = "CHANGE_FAVORITE_FOODS";//should change line 9 of Favorite.jsx
export const GET_FAVORITE_FOODS = "GET_FAVORITE_FOODS";
export const CONNECT_TO_RECIPE = "CONNECT_TO_RECIPE";
export const GET_SHOPPING_LIST = "GET_SHOPPING_LIST"; //changes list obj in line 6 of ShoppingList.jsx
export const ON_CARD_CLICKED = "ON_CARD_CLICKED";
export const BACK_BUTTON_CLICKED = "BACK_BUTTON_CLICKED";
export const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
export const REMOVE_FAV = "REMOVE_FAV";
