import { useState } from "react";
import "./login.css";
export default function App() {
  let [userCredentials, setuserCredentials] = useState({
    username: "",
    password: ""
  });

  let db_users = [
    {
      username: "admin",
      password: "123"
    },
    { username: "test", password: "123" }
  ];

  function getUser(userData) {
    let { username, password } = userData;
    let auth = db_users.find(
      (user) => user.username === username && user.password === password
    );
    if (auth) {
      return auth;
    } else {
      return false;
    }
  }

  function handleSubmit() {
    let userDetails = getUser(userCredentials);
    if (userDetails) {
      alert(`${userDetails.username} signed in succesfully`);
    } else {
      alert("not a valid user");
    }
  }
  function handleChange(e) {
    let { name, value } = e.target;
    setuserCredentials((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  let { username, password } = userCredentials;

  return (
    <div className="container">
      <div id="textmain">  Welcome 
      Login here
      </div>
      <div id="center">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div id="center">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <button id="button" style={{ margin: "10px" }} onClick={() => handleSubmit()}>
        Login
      </button>
    </div>
  );
}



