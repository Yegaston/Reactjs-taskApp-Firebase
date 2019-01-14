import React, { Component } from 'react';
import M from 'materialize-css';
import firebase from 'firebase';
import provider from '../AuthSetting';

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, instances);
});


export default class Nav extends Component {
    constructor() {
        super()

        this.state = {
            user: [],
            token: ''
        }

        this.loginHandler = this.loginHandler.bind(this);
    }

    loginHandler() {
        console.log(":D");
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const token = result.credential.accessToken;
                const user = result.user;
                console.log(user)
                this.setState = {
                    user: user,
                    token: token
                }
                M.toast({ html: `User: ${user.displayName} login! :D` });
            })
            .catch(err => {
                const errorCode = err.code;
                const errorMess = err.message
                console.log("Error code: " + errorCode + "Menssage: " + errorMess);

                const errEmail = err.email;
                const errCredential = err.credential;
                console.log("Email error" + errEmail + "Credential error: " + errCredential)
            })

        console.log(this.state.token);
        console.log(this.state.user);
        this.forceUpdate();
    }


    render() {
        if(this.state.token !== ''){
            return (
                <div>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">Logo</a>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/">Home</a></li>
                                <li><p className="brand-logo">{this.state.user.statusName}</p></li>
                            </ul>
                        </div>
                    </nav>
    
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">Logo</a>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/">Home</a></li>
                                <li><button className="waves-effect waves-light red lighten-4 btn" onClick={this.loginHandler}>Login with Google</button></li>
                                <li><a href="/">Login with Github</a></li>
                            </ul>
                        </div>
                    </nav>
    
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Login with Google</a></li>
                        <li><a href="/">Login with Github</a></li>
                    </ul>
                </div>
            )
        }
    }
}

