import React from "react";
import "../login/Login.css";
import GoogleButton from 'react-google-button'

export const Login = () => {
  return (
    <div className="login-box1">
      <div className="login-wrapper">
        <div className="login-logo">
          <img
            src="https://media.licdn.com/dms/image/C510BAQH2Zvua5CkS2g/company-logo_200_200/0/1631368580201?e=2147483647&v=beta&t=WMNE__B-E2WM1dlH0j_rV3nB2_mnrSBOmNQzJXxZpiQ"
            alt=""
            className="logo-image"
          />
          <span className="text">Hello There &#128075; </span>
        </div>
        <div className="login-google">
          <GoogleButton/>
        </div>
      </div>
    </div>
  );
};
