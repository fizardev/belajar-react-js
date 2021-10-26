import React, { Component } from "react";

import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            judul: "Daftar Makanan yang Kami Sediakan:",
            inputNama: "Fizar Rama Waluyo",
            inputKota: "Majalengka"
        }

        this.rubahJudul = this.rubahJudul.bind(this);
        // this.handleChange = this.handleChange(this);
    }

    rubahJudul(e) {
        this.setState({judul: "Makanan tersedia:"});
        // this.handleChange(e);
    }
    handleChange(inputValue, e) {
        // console.log(inputValue);
        this.setState({
            [inputValue]: e.target.value,
        });
        
    }
    render() {
        return(
            <div>
                <h1>{this.state.judul}</h1>
                <h3>{this.state.inputNama}</h3>
                <h3>{this.state.inputKota}</h3>
                <button onClick={this.rubahJudul}>Rubah Judul</button>
                <input type="text" onChange={(e) => this.handleChange("inputNama", e)} value={this.state.inputNama} />
                <input type="text" onChange={(e) => this.handleChange("inputKota", e)} value={this.state.inputKota} />
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <ListMakanan linkImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" nama="Nasi Padang" />
                        </td>
                        <td>
                            <ListMakanan linkImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" nama="Sate" />
                        </td>
                        <td>
                            <ListMakanan linkImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" nama="Soto Lamongan" />
                        </td>
                        <td>
                            <ListMakanan linkImage="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" nama="Nasi Kentut"/>
                        </td>
                        <td>
                            <ListMakanan linkImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" nama="Mendhoan" />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MenuMakanan;