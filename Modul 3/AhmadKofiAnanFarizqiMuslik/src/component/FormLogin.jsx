import React from 'react';
import './FormLogin.css'

const FormLoginComponent = () => {
    return (
        <div className="FormLogin">
            <h2>Login Form</h2>
            <form>
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <input type="checkbox" defaultChecked /> Remember Me
                    </div>
                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">Password?</a></span>
                </div>
            </form>
        </div>
    );
}

export default FormLoginComponent;