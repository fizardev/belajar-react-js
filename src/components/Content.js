import React,{ Component } from "react";
import Image from "./Image";

class Content extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            daftar: "Daftar Makanan Nusantara",
        }
    }
    render() {
        return(
            <div>
                <p>{this.state.daftar}</p>
                <ul>
                    <Image linkgambar="http://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg"/>
                    <li>Sate Ayam</li>
                    <li>Rp. 10.000</li>
                    <li>Jl. Brigjen Darsono No. 30</li>
                </ul>
                <ul>
                    <Image linkgambar="https://asset.kompas.com/crops/hgYCTwrFpAN5wQ35-Z2STU9C0vQ=/3x0:700x465/750x500/data/photo/2020/11/08/5fa7d069849e2.jpg"/>
                    <li>Soto Ayam</li>
                    <li>Rp. 8.000</li>
                    <li>Jl. Brigjen Darsono No. 30</li>
                </ul>
                <ul>
                    <Image linkgambar="https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg"/>
                    <li>Nasi Goreng</li>
                    <li>Rp. 15.000</li>
                    <li>Jl. Brigjen Darsono No. 30</li>
                </ul>
                <ul>
                    <Image linkgambar="https://assets-a1.kompasiana.com/items/album/2018/03/21/med-5ab21dadbde57512175e2e35.jpg"/>
                    <li>Mendhoan</li>
                    <li>Rp. 10.000</li>
                    <li>Jl. Brigjen Darsono No. 30</li>
                </ul>
            </div>
        );
    }
}

export default Content;