import React, { Component } from 'react'
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, instances);
  });


export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Login with Google</a></li>
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

