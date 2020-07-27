import React, { Component } from "react";
import Button from "@material-ui/core/Button";


export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
          Logo
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active mr-3">
                <a class="nav-link" to="/">Iniciar Session</a>
              </li>

              <li className="nav-item active">
                <Button
                  variant="contained"
                  color="secondary"
                  // className={classes.button}
                  // startIcon={<DeleteIcon />}
                >
                  Carrito
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
