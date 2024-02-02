import React from 'react';
import '../Login-main/Login-main.css';
import { Login } from '../login/Login';

export const Index = () => {
  return (
    <div className='index'>
        <div className="index-wrapper">
            <div className="index-images">
                <img src="https://img.freepik.com/free-vector/electronic-documentation-man-with-registration-checking-repository-log-online-approval-screen-form-validation-page-expense-chronicles-vector-isolated-concept-metaphor-illustration_335657-4323.jpg?w=826&t=st=1706878386~exp=1706878986~hmac=d0cfb3383b0c68dc447acbb222f31549c029287b226ce3cb8123dd11fd35cdff" alt="" className="index-image" />
            </div>
            <div className="index-component">
                <Login/>
            </div>
        </div>
    </div>
  )
}
