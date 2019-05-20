import React from "react";
import { render } from 'react-dom';
require ('./styles.css')
import Root from './components/Root'
import store from './store'


render(
<Root store={store} />,
document.getElementById("app")
);
