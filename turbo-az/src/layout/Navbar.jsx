import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          Turbo.az
        </Link>
        <Link className="FavoritesBtn" to="/favorites">Favorites</Link>
        <a href="#">Dilerlər</a>
        <a href="#">Avtokataloq</a>
        <a href="#">Moto</a>
        <a href="#">Ehtiyat hissələr və aksesuarlar</a>
        <a href="#">İcarə</a>
        <Link className="add_btn" to={"/creatforum"}>Yeni elan</Link>
      </div>
    </nav>
  );
}

export default Navbar;
