import React from "react";

const judul = {
  color: '#ffffff',
  backgroundColor: '#dddcec'
}

const Header = () => {
  return (
    <div>
      <center>
        <h1 style={judul}>
          Belajar React JS
        </h1>
        <a href="">Home</a>|<a href="">Product</a>|<a href="">Kontak</a>|
        <a href="">Tentang Kami</a>
      </center>
    </div>
  );
};

export default Header;
