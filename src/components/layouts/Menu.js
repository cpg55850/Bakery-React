import React, { Component } from "react";
import uuid from "uuid";
import glazed_donut from "../../img/glazed_donut.png";
import choc_sprinkles from "../../img/choc_sprinkles.png";
import choc_iced_glazed from "../../img/choc_iced_glazed.png";
import cinn_bun from "../../img/cinn_bun.png";
import present from "../../img/present.png";
import santa_belly from "../../img/santa_belly.png";
import white_glazed from "../../img/white_glazed.png";
import apple_fritter from "../../img/apple_fritter.png";
import reindeer from "../../img/reindeer.png";

import "./Menu.css";

export class Menu extends Component {
  state = {
    foods: [
      {
        key: uuid(),
        foodName: "Glazed Donut",
        foodImg: glazed_donut
      },
      {
        key: uuid(),
        foodName: "Chocolate Iced Glazed with Sprinkles",
        foodImg: choc_sprinkles
      },
      {
        key: uuid(),
        foodName: "Apple Fritter",
        foodImg: apple_fritter
      },
      {
        key: uuid(),
        foodName: "Glazed Chocolate Donut",
        foodImg: choc_iced_glazed
      },
      {
        key: uuid(),
        foodName: "Cinnamon Bun",
        foodImg: cinn_bun
      },
      {
        key: uuid(),
        foodName: "Santa Belly",
        foodImg: santa_belly
      },
      {
        key: uuid(),
        foodName: "Reindeer",
        foodImg: reindeer
      },
      {
        key: uuid(),
        foodName: "Present",
        foodImg: present
      },
      {
        key: uuid(),
        foodName: "White Glazed with Sprinkles",
        foodImg: white_glazed
      }
    ]
  };

  render() {
    const foods = this.state.foods;

    return (
      <nav>
        <ul className="menuUl">
          {foods.map(food => (
            <li>
            <h2>{food.foodName}</h2>
            <img src={food.foodImg} alt='yup'/>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Menu;
