// import "./App.css";
// // import ""

// function App() {
//   return (

//   );
// }

// export default App;
import React, { Children, useEffect } from "react";
import { connect } from "react-redux"; // connects to store
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

// import { fetchPosts } from '../actions/posts';
import Homepage from '../Homepage/Homepage';
import Navbar from "./Navbar";
import Login from "../Login/Login";
import Page404 from "../page404/Page404";
// import Page404 from './App/Page404';
// import {
//    Homepage,
//   Login,
//   Page404 } from './';
// import jwt from 'jwt-decode';
// import { authenticateUser } from '../actions/auth';
// import { getAuthTokenFromLocalStorage } from '../helpers/utils';

// const PrivateRoute = (privateRouteProps) => {
//   //change location to path we are sending path not location
//   const { isLoggedin, children, path } = privateRouteProps;
//   return isLoggedin ? children : <Navigate to="/login" state={path}></Navigate>;

// };

function App(props) {
  console.log("this.props.app", props);

  // const { auth } = props;
  // const location = useLocation();
  // console.log('location',location);
  //  useEffect(()=> {
  //   // props.dispatch(fetchPosts());
  //       // console.log("component props",props);
  //     // const token = localStorage.getItem('token');
  //     // const token = getAuthTokenFromLocalStorage();
  //     if (token) {
  //       const user = jwt(token);

  //       // console.log('user', user);
  //       props.dispatch(
  //         authenticateUser({
  //           email: user.email,
  //           _id: user._id,
  //           name: user.name,
  //         })
  //       );

  //  };},[]);

  return (
    //  <Router>
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage
              //  table={table}
                />}/>
        {/* no need to render props can pass it to element directly as it gets automatically rendered */}
        {/* //something passed to home for that only props is there * * */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>

    //    </Router>
  );
}

// mapping the state to store
function mapStateToProps(state) {
  return {
    table: state.table,
    // auth: state.auth
  };
}

// App.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(App);
