import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phone } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
      }),
    });
    const data = await res;
    console.log(data);
    console.log(data.status);

    if (!data) {
      window.alert("invalid Registration");
      console.log("invalid Registration");
    } else if (data.status === 422) {
      window.alert("Students Email already inserted in a table");
    } else if (data.status === 432) {
      window.alert("Enter All the Feild Properly");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/studentinfo");
    }
  };

  return (
    <>
      <section className="signUp">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h1 className="form-title text-center mb-4">
                Insert Student Information
              </h1>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    id="fname"
                    value={user.fname}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Enter Your First Name"
                  />
                  <label htmlFor="fname">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="lname"
                    id="lname"
                    value={user.lname}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Enter Your Last Name"
                  />
                  <label htmlFor="lname">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Enter Your Email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="Number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Enter Your Phone Number"
                  />
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="d-grid gap-2">
                  <button
                    onClick={PostData}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className="navl text-center">
                  <NavLink
                    to="/studentinfo"
                    className="signup-image-link text-center"
                  >
                    Go yo Student table...
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
