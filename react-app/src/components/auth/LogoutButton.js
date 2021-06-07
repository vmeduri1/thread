import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import { Redirect } from "react-router-dom";



const LogoutButton = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };
  if (!user) {
    return <Redirect to="/" />;
  }
  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
