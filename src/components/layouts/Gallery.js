import React, { Component } from "react";
import Cake from "../../img/carlos_cake.jpg";
import Christmas from "../../img/carlos_christmas.jpg";
import Cupcakes from "../../img/carlos_cupcakes.jpg";
import Cupcakes2 from "../../img/carlos_cupcakes2.jpg";
import Donuts from "../../img/carlos_donuts.jpg";
import Crazy from "../../img/carlos_crazy.jpg";
import Colorcake from "../../img/carlos_colorcake.jpg";
import Pie from "../../img/carlos_pie.jpg";
import Cookies from "../../img/carlos_cookies.jpg";

import "./Gallery.css";

export class Gallery extends Component {
  render() {
    return (
    <div className="galleryGrid">
    <div><img src={Cake}/></div>
    <div><img src={Donuts}/></div>
    <div><img src={Cupcakes}/></div>
    <div><img src={Cupcakes2}/></div>
    <div><img src={Crazy}/></div>
    <div><img src={Colorcake}/></div>
    <div><img src={Pie}/></div>
    <div><img src={Cookies}/></div>
    </div>
    );
  }
}

export default Gallery;
