import React, { Component } from 'react';
// import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import styled from 'styled-components';
import BigRow from './BigRow.js';


const Str = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: bolder;
`

class AllRows extends Component {
  render() {
    return (
    <div className="container-fluid">
        {this.props.team.map((member) => (<BigRow key={member.id} member={member} />))}
    </div>
    );
  }
}

export default AllRows;
