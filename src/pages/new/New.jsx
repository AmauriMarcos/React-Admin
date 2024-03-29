import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../features/adminSettings/adminSlice';
import { register } from "../../features/authSlice";
import {useNavigate} from 'react-router-dom';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  const isDarkMode = useSelector(selectTheme);
  const [values, setValues] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  const handleInputChange = (e) => {
 
      const { name, value } = e.target;

      setValues({
        ...values,
        [name]: value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      const userData = {
        username: values.username,
        email: values.email,
        password: values.password,
        isAdmin: 0,
        avatar: file
      }

      dispatch(register(userData));
      navigate('/');

    }catch(err){
      throw err;
      
    }
  }
 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="newTop">
          <h1>{title}</h1>
        </div>
        <div className="newBottom">
          <div className="left">
            <div className="imgStroke">
              <img
                src={file ? file : "https://media.istockphoto.com/vectors/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-vector-id1193060544?k=20&m=1193060544&s=612x612&w=0&h=MI8y2q1HsY4TEAZD3tNCJN3bmc39N3pnFKC2KKNDUmE="}
                alt="User profile"
              />
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label className="addFile" htmlFor="username">
                  <DriveFolderUploadIcon
                    fontSize="large"
                    sx={{ color: isDarkMode ? " #e2cda7" : "#21B6D0" }}
                  />
                  Add a file
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="username"
                  id="username"
                  onChange={handleFileUpload}
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input
        
                      type={input.type}
                      onChange={(e) => handleInputChange(e)}
                      name={input.name}
                      id={input.label}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}

              <button
                type="submit"
                className="submitButton"
              >
                Submit
              </button>
              <button type="button" className="resetButton">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
