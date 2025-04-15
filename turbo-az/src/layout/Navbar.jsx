import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          Turbo.az
        </Link>
        <a href="#">Bütün elanlar</a>
        <a href="#">Dilerlər</a>
        <a href="#">Avtokataloq</a>
        <a href="#">Moto</a>
        <a href="#">Ehtiyat hissələr və aksesuarlar</a>
        <a href="#">İcarə</a>
        <button className="add_btn">+ Yeni elan</button>
      </div>
    </nav>
  );
}

export default Navbar;
