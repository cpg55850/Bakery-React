import React, { Component } from "react";
import Column from "./Column";
import "./AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
      <Column title="Meet the founders of this fine establishment." bg="#124"/>
      <div className="aboutGrid">
        <div className="aboutItem">
         <img src="https://lh3.googleusercontent.com/-OazQSrLKuz4/W34uUjlpYJI/AAAAAAAAAAs/n99RIvM8ouQs0HgibROoI-0CctXnQbA0wCEwYBhgL/w140-h139-p/Photo%2Bon%2B8-22-18%2Bat%2B10.08%2BPM%2B%25232.jpg"/>
          <h1>Charles Graham</h1>
          <p>Charles "Charlie" Graham founded the bakery in 1967. Before being born, he was known for his excellent gymnastic skills and undercover detective-work. Today, he is most well known for his donuts.</p>
        </div>
        <div className="aboutItem">
          <img src="https://i.ytimg.com/vi/dJDyTaPHSSY/maxresdefault.jpg"/>
          <h1>John Doe</h1>
          <p>Not satisified with his fame as go-to placeholder name for coders for generations, John Doe decided to try his hand at cooking all kinds of sweets. What an interesting and profound man.</p>
        </div>
        <div className="aboutItem">
          <img src="https://charlestonpourhouse.com/wp-content/uploads/2015/12/dallas_baker_cd.jpg"/>
          <h1>Dallas Baker</h1>
          <p>Co-founded the Institute of Quantam Physics and Mathematics for the excellent League of Gentlemen in 2017. In his spare time he likes to play CS:GO and bake flour-based goods.</p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
