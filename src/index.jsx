// import "babel-polyfill";
// import cssVars from "css-vars-ponyfill";

// cssVars();
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import * as serviceWorker from './serviceWorker'

axios.defaults.baseURL = 'https://nampicuam-server.herokuapp.com/'
axios.defaults.withCredentials = true

ReactDOM.render(<App />, document.getElementById('root'))

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
