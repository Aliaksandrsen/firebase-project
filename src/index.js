import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import { App } from "./App";

import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyAjfvcd-qoER223SmUOFFkAxhcXEddeLhM",
  authDomain: "fir-test-37b18.firebaseapp.com",
  databaseURL: "https://fir-test-37b18-default-rtdb.firebaseio.com",
  projectId: "fir-test-37b18",
  storageBucket: "fir-test-37b18.appspot.com",
  messagingSenderId: "897594249618",
  appId: "1:897594249618:web:a3af25415eb756300d314b",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
