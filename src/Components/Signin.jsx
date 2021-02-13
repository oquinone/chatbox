import React, { Component } from 'react';
import './Signin.scss'

class SignIn extends Component {
    render() { 
        return (
            <body>
                <div id="signIn">
                    <div id="login-Text">
                        <h1>Log In</h1>
                    </div>

                    <div className="form-div">
                        <form>
                            <label>
                                Phone Number
                            </label>
                            <br/>
                            <input type="text" name="phone number"></input>
                        </form>
                    </div>

                    <div className="form-div">
                        <form>
                            <label>
                                Password
                            </label>
                            <br/>
                            <input type="text" name="password"></input>
                        </form>
                    </div>

                    <div id="bttm-div">
                        <button id="login-btn">Log In</button>
                        <h3 id="forgot-psswd">Forgot password?</h3>
                        <h5>Need an account? Sign up</h5>
                    </div>
                </div>
            </body>
        );
    }
}
 
export default SignIn;
