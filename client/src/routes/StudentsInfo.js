import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const StudentsInfo = () => {
  const [sData, setSData] = useState([]);

  const callStudentPage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setSData(data);
      console.log(sData);

      if (!(res.status == 200)) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      //   navigate("/Login");
    }
  };

  useEffect(() => {
    callStudentPage();
  }, []);

  return (
    <>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">View Profile</th>
          </tr>
        </thead>
        <tbody>
          {sData.map((student, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>Click Here</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <NavLink
        to="/"
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
      >
        Enter the information of the student
      </NavLink>
    </>
  );
};

export default StudentsInfo;
