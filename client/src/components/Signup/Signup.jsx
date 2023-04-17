import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    const navigate = useNavigate();
  const [type, settype] = useState("password");
  const showpass = () => {
    if (type === "password") {
      settype("text");
    } else {
      settype("password");
    }
  };
  const [creds, setcreds] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (creds.cpassword !== creds.password) {
      alert("password and confirm password should be same.");
    } else {
      const response = await fetch(
        `https://blogging-nin-ja-kitb.vercel.app/api/auth/createuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: creds.name,
            email: creds.email,
            password: creds.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //save the authtoken and redirect
        localStorage.setItem("token", json.authtoken);
        //   history.push("/");
        // window.location.replace("/");
        navigate("/")
        props.showAlert("Account created successully", "success");
      } else {
        props.showAlert("invalid credentials", "danger");
      }
    }
  };
  return (
    <div className="container">
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={creds.email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            value={creds.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={onChange}
            value={creds.password}
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            onChange={onChange}
            type={type}
            className="form-control"
            name="cpassword"
            id="cpassword"
            placeholder="confirm Password"
            value={creds.cpassword}
          />
        </div>
        <div className="form-group form-check">
          <input
            onChange={showpass}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Show password
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
