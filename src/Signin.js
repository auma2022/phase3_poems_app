import axios from "axios";
import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";


const Signin = () => {
  //const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    remember_me: true,
  });
  const [loading, setIsLoading] = useState(true);
  const userRef = React.useRef();

  useEffect(() => {
    if (null !== userRef.current) {
      userRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  //submission form function
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9292/user/login", formData)
      .then((response) => {
        if (Object.values(response.data).length > 1) {
          localStorage.setItem("name", JSON.stringify(response.data));
          localStorage.setItem("authenticated", JSON.stringify(true));
          alert("Login successful");
          //navigate("/home/dashboard");
        } else {
          alert("user doesn't exist");
          setFormData({
            username: "",
            password: "",
          });
        }
      })
      .then(() => setIsLoading(false));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Sign in to start your session</h4>
        <label>
          Username
          <input
            className="inputs"
            type="text"
            placeholder="Usename"
            id="name"
            autoComplete="off"
            required
            onChange={handleChange}
            ref={userRef}
            value={formData?.name}
          />
        </label>
        <label>
          Password
          <input
            className="inputs"
            type="password"
            placeholder="**"
            id="password"
            required
            value={formData?.password}
            onChange={handleChange}
          />
        </label>
        <div className="nav">
          <span>
            <input
              type="checkbox"
              id="remember_me"
              checked={formData?.remember_me}
              onChange={handleChange}
            />
            <h3>
              <strong>Remeber Me</strong>
            </h3>
          </span>
          <button className="btn-pry" type="submit">
            Sign In
          </button>
        </div>
        <span className="misc">
          {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
          <p >I forgot my password</p>
        </span>
      </form>
    </>
  );
};

export default Signin;