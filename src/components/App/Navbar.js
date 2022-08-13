import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../actions/auth";
// import { searchUsers } from '../actions/search';
// import "../Login/login.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      userslist: [],
    };
  }
  render() {
    return <div id="navfortt">Navbar </div>;
  }
}
export default Navbar 
