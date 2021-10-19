import React, { Component } from "react";
import ListMenuUtama from "../ListData/ListMenuUtama";

class MenuUtama extends Component {
    render() {
        return (
            <div>
                <ListMenuUtama linkImage = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
            </div>
        );
    }
}

export default MenuUtama;