import React, { Component } from 'react';
import  "./spinnerloader.css";
export class Spinner extends Component {
    render() {
        return (
            <div className="loader-container  text-center">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}

export default Spinner
