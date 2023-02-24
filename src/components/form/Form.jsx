import React from "react";
import "./Form.css";
import img from "../../assets/camera.png";
import { useState } from "react";

function Form() {
  const [inputData, SetInputData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Title: "",
    Description: "",
    Image: "",
    Male:"",
    Female:"",
  });
  const [Array, SetArray] = useState([]);
  function changeHandle(e) {
    SetInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  let { FirstName, LastName, Email, Title, Description,Image,Male, Female } = inputData;
  function changeHandle2() {
    SetArray([...Array, { FirstName, LastName, Email, Title, Description,Image,Male,Female }]);

    SetInputData({
      FirstName: "",
      LastName: "",
      Email: "",
      Title: "",
      Description: "",
      Image:"",
      Male:"Male",
      Female:"Female"
      
    })
  }
  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>React Form</h1>
          <form action="">
            <label htmlFor="FirstName">
              FirstName
              <input
                type="text"
                name="FirstName"
                value={inputData.FirstName}
                placeholder="Enter your firstname"
                onChange={changeHandle}
                required
              />
            </label>

            <label htmlFor="LastName">
              LastName
              <input
                type="text"
                name="LastName"
                value={inputData.LastName}
                placeholder="Enter your lastname"
                onChange={changeHandle}
                required
              />
            </label>

            <label htmlFor="Email">
              Email
              <input
                type="email"
                name="Email"
                value={inputData.Email}
                placeholder="Enter your Email"
                onChange={changeHandle}
                required
              />
            </label>

            <label htmlFor="Title">
              Title
              <input
                type="text"
                name="Title"
                value={inputData.Title}
                placeholder="Title"
                onChange={changeHandle}
                required
              />
            </label>

            <label htmlFor="Description">
              Description
              <input
                type="text"
                className="description"
                value={inputData.Description}
                name="Description"
                placeholder="Description"
                onChange={changeHandle}
                required
              />
            </label>

        
           
            <button type="submit" className="form-btn" onClick={changeHandle2} >
              {" "}
              <p>submit</p>
            </button>
          </form>
        </div>
      </div>

      <div className="output-container" id="output">
       {  Array.map(
          (info,index) => {
            return (
              <>
              <div className="output" key={index}>
                <p className="p1"> FirstNAme- {info.FirstName}</p>
                <p className="p2">LastName- {info.LastName}</p>
                <p className="p3">Email- {info.Email}</p>
                <p className="p4">Title- {info.Title}</p>
                <p className="p5">Description- {info.Description}</p>
            
                </div>
              </>
            );
          }
          )
        }
        </div>
    </>
  );
}

export default Form;
