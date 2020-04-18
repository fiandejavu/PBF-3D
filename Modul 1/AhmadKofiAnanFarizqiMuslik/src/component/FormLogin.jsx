import React from 'react';
import './FormLogin.css'

const FormLoginComponent = () => {
    return (
        <div className="FormLogin">
            <center><h2>Login Form</h2></center>
            <form>
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" style={{ backgroundColor: '#2009F0' }}>Login</button>
                    <input type="checkbox" defaultChecked /> Remember Me
                    </div>
                    <center><button type="button" className="cancelbtn">Cancel</button></center>
                    <br></br>
            </form>
        </div>
    );
}

export default FormLoginComponent;