import React, { Component } from "react";
import Showcase from "./Showcase";
import TwoColumn from "./TwoColumn";
import Column from "./Column";
import Map from "./Map";

export class Home extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div>
        <Showcase
          title="Charlie's Bakery"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
      alias, repellendus earum quisquam ut soluta! Dolore veritatis
      impedit ad doloremque cumque ratione placeat laborum itaque,
      distinctio facilis eum quo eaque."
          img="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />
        <TwoColumn 
        title="Map"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
      alias, repellendus earum quisquam ut soluta! Dolore veritatis
      impedit ad doloremque cumque ratione placeat laborum itaque,
      distinctio facilis eum quo eaque."
              title2="Map"
        desc2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
      alias, repellendus earum quisquam ut soluta! Dolore veritatis
      impedit ad doloremque cumque ratione placeat laborum itaque,
      distinctio facilis eum quo eaque."
        bg="blue"
        bg2="red"
        />
        <Map/>
      </div>
    );
  }
}

export default Home;
