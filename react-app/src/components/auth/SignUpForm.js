import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [f_name, setFirstName] = useState("")
  const [profile_pic, setProfilePic] = useState("")
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log("alfFo;ifjoasidnf;osifa; We got here")
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, f_name, profile_pic));
      if (data.errors) setErrors(data.errors)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateProfilePic = (e) => {
    setProfilePic(e.target.value)
  }

  if (user) {
    return <Redirect to="/tinder-cards" />;
  }

  return (
    <>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <form onSubmit={onSignUp}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="first name"
            onChange={updateFirstName}
            value={f_name}></input>
        </div>
        <div>
          <label>Profile Pic</label>
          <input
            type="text"
            name="profile pic"
            onChange={updateProfilePic}
            value={profile_pic}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
