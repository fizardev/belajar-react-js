import React, { Component } from "react";

class ListMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: this.props.linkImage,
            dataNama: this.props.nama
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const namaMakanan = this.state.dataNama;
        alert(namaMakanan);
    }

    render() {
        return(
            <div>
                <img src={this.state.dataList} alt="Product Makanan" width="150" onClick={this.handleClick}/>
            </div>
        );
    }
}

export default ListMakanan;