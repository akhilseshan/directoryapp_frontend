import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <form action="#" className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="email" placeholder="someone@xyz.com" id="email_id" className="validate" />
                                <label className="active" for="email_id">Email ID</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="password" className="validate" id="password" />
                                <label className="active" for="password">Password</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login