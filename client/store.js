import middleware from './middleware.js/middleware'  // Imported the middleware file
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk'
import Dexie from 'dexie';


const initalState = {
  auth: {
    usernameStr: '',
    passwordStr: '',
    isLoggedIn: false,
    isSignup: false,
    userId: null,
    userName: '',
    email: '',
    error: null
  },
  main: {
    searchStr: "",
    searchResults: [],
    cart: [],
    currCard: [],
    hasBeenClicked: false,
    cardClicked: false,
    backButton: true,
    cardId: -1,
    favoriteFoods: [],
    shoppingCartArr: []
  }
};

let db = new Dexie('Mikeys Dexie');


const store = createStore(
  reducers,
  initalState,
  composeWithDevTools(applyMiddleware(middleware, thunk)), // Look at the applyMiddleware params.
);

export default store;