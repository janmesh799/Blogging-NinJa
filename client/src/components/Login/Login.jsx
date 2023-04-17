import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  //   const history = useHistory();
  const [creds, setcreds] = useState({
    email: "",
    password: "",
  });
  const [type, settype] = useState("password");
  const showpass = () => {
    if (type === "password") {
      settype("text");
    } else {
      settype("password");
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://blogging-nin-ja-kitb.vercel.app/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: creds.email, password: creds.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the authtoken and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Logged in successully", "success");
    } else {
      props.showAlert("invalid credentials", "danger");
    }
  };
  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={onChange}
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={onChange}
            type={type}
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            onChange={showpass}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            show password
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
