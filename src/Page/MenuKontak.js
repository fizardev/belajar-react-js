import React, { Component } from "react";

class MenuKontak extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alamat: "Rajagaluh, Majalengka",
            kontak: "fizardev@gmail.com"
        }
    }

    render() {
        return(
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak kami: {this.state.kontak}</h4>
                </center>
            </div>
        );
    }
}

export default MenuKontak;