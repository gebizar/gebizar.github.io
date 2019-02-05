import React, { Component } from 'react';
import './App.css'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import styled from 'styled-components';
import Error from "./components/Error.js"
import Home from "./components/Home.js"
import AllRows from "./components/AllRows.js"
import Tu from "./images/Tu.jpg"
import Alex from "./images/Alex.jpg"
import Dave from "./images/Dave.jpg"
import Gabe from "./images/Gabe.jpg"




import PizzaIcon from "./images/pizza_icon.png"

const navStyle = {
  backgroundColor: '#cc5500',
  color: "white",
  margin: "0px 0px 0px 0px",
  padding: "10px 10px 10px 10px"


}

const Image = styled.img`
    max-width: 50px;
    opacity: 0.8;
    &:hover {
        opacity: 0.6;
    }
    `

const Center = styled.div`
  align-items: center;
  justify-content: center;
`
// const headerStyle = {
//   margin: "0px 0px 0px 0px"
// }

const Str = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: bolder;
`


class App extends Component {
  state = {
    team: [
      {
        id: 1,
        name: "Tu",
        fullname: "Tu Adrian Nguyen",
        aos: "Informatics: Data Science",
        ayog: "Summer 2019",
        description: "Play this guy in Hearthstone and he'll send you to the shadow realm.",
        email: "nguyet04@uw.edu",
        linkedin: "https://www.linkedin.com/in/tu-nguyen-07/",

        photo: Tu,
      },
      {
        id: 2,
        name: "Alex",
        fullname: `Alex "Wenbo" Zhou`,
        aos: "Informatics: Data Security & Software Development",
        ayog: "Summer 2019",
        description: "A budding tech entrepreneur. Embodies Valley Chic.",
        email: "alexz@entree.ai",
        linkedin: "https://www.linkedin.com/in/alexwzhou/",

        photo: Alex,

      },
      {
        id: 3,
        name: "Dave",
        fullname: `David "Dave" Lee`,
        aos: "Informatics: Human Computer Interaction",
        ayog: "Fall 2019",
        email: "337dave@gmail.com",
        linkedin: "https://www.linkedin.com/in/davidl33/",
        description: "Young, Driven, Ambitious. Our lead UX Designer.",
        photo: Dave,

      },
      {
        id: 4,
        name: "Gabe",
        fullname: `Gabriel "Gabe" Bizar`,
        aos: "Informatics: Data Science",
        ayog: "Summer 2019",
        description: "2019 25 and Under Athlete of the Year",
        email: "gebizar@uw.edu",
        linkedin: "https://www.linkedin.com/in/gabe-bizar-a004a4158/",
        photo: Gabe,
      },
    ]
  }
  render() {
    return (
      <div>
        <BrowserRouter> 
          <div>
              <div className="jumbotron" style={navStyle}> 
                <div className="container" style={{margin:"0px 0px 10px 0px"}}> 
                <Center className="row">
                  <div className="col-1">
                    <Image alt="Pizza Icon" src={PizzaIcon} />
                  </div>
                  <div className="col-11">
                    <Str> Entree.AI Voice Assistant </Str>
                  </div>
                </Center>
                </div>
                <p style={{margin:"0px 0px 0px 15px"}}> Pizza Delivery. From Voice to Table </p>
              </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/team'} className="nav-link"> Meet the Team </Link></li>
                <li><Link to={'/contact'} className="nav-link"> Contact Us </Link></li>

              </ul>
            </nav>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/team" render={() => <AllRows team={this.state.team}/>}/>
                <Route path="/contact"/>
                <Route component={Error} />
              </Switch>
          </div>
        </BrowserRouter>

      </div>

    );
  }
}

export default App;
