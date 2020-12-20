import { useEffect, useState, useCallback } from "react";
import firebase from "firebase/app";

import "./App.css";

export const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const [hasAccount, setHasAccount] = useState(false);
  const [name, setName] = useState(null);

  useEffect(() => {
    const db = firebase.database();

    const name = db.ref("name");
    name.on("value", (elem) => {
      console.log(elem.val());
      setName(elem.val());
      return elem.val();
    });
  }, []);

  const onChangeEmail = useCallback(({ target: { value } }) => {
    setEmail(value);
  }, []);

  const onChangePassword = useCallback(({ target: { value } }) => {
    setPassword(value);
  }, []);

  const onChangeKey = useCallback(({ target: { value } }) => {
    setKey(value);
  }, []);

  const onChangeValue = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  const onSubmitData = useCallback(() => {
    const db = firebase.database();

    db.ref(key).push(value);
    alert("your data was written to db");
  }, [key, value]);

  const onSubmitAuth = useCallback(() => {
    // create auth

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch((err) => console.log(err));

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => setHasAccount(true))
      .catch((err) => console.log(err));
  }, [email, password]);

  return (
    <div className="App">
      {hasAccount ? (
        <>
          <div>Hello</div>
          {name && <div>{name}</div>}

          <input
            type="text"
            placeholder="Key"
            value={key}
            onChange={onChangeKey}
          />

          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={onChangeValue}
          />

          <input type="submit" onClick={onSubmitData} />
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />

          <input type="submit" onClick={onSubmitAuth} />
        </>
      )}
    </div>
  );
};
