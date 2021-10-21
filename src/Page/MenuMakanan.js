import React, { Component } from "react";

import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
    render() {
        return(
            <div>
                <h3>Daftar Makanan yang Kami Sediakan: </h3>
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