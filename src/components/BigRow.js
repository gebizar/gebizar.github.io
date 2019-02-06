import React, {Component} from "react";
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import styled from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    &:hover {
        opacity: 0.6;
    }
    
    `

const TextContainer = styled.div`
    text-overflow: wrap;
    white-space: initial;
    word-wrap: break-word;
    padding-left: 15px;
    padding-top: 15px;
`
const TextContainer2 = styled.div`
    padding-left: 15px;
    padding-top: 15px;
`



const TabContainer = styled.div`
    vertical-align:top;
    padding-left: 0px;

`

const ImgContainer = styled.div`
    padding-right: 0px;
    padding-left: 0px;
`
const Center = styled.div`
    vertical-align:top;
    margin-bottom: 5px;

`
class BigRow extends Component {
    constructor(props, context) {
        super(props,context);
        
    
    }
    state = {};
   
    render() {
        return(
            <Center className="row" style={this.props.member.id % 2 == 0 ? {backgroundColor: '#ffffff'} : {backgroundColor: '#F0EAD6'}} >
                <ImgContainer className="col-lg-2 col-md-6 col-sm-12">
                    <Image src={require(`../images/${this.props.member.name}.jpg`)} alt={this.props.member.name + "Photo"}/> 
                </ImgContainer>
                <TabContainer className="col-lg-10 col-md-6 col-sm-12">
                    <TabBody style={{height:'100%'}} member={this.props.member}/>
                </TabContainer>
            </Center>
        );
    };
    
}




class TabBody extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          key: this.props.name,
        };
    
    }
    render() {
        return(
            <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                <Tab eventKey={this.props.member.name} title="About Me">
                    <TextContainer >
                        <h1 style={{fontWeight:"bold"}}>{this.props.member.fullname}</h1>
                        <h2 style={{fontWeight:"bold"}}> About Me </h2>
                        <h3> Major, Track: {this.props.member.aos} </h3> 
                        <h3> Expected Graduation: {this.props.member.ayog} </h3> 
                        <h3>{this.props.member.description}</h3>
                    </TextContainer>
                </Tab>
            <Tab eventKey="profile" title="Profie">
                <TextContainer2>
                    <p> Email: </p> <a href={`mailto:`+this.props.member.email}> {this.props.member.email} </a>
                    <p> Linkedin:  </p> <a href={this.props.member.linkedin}>{this.props.member.linkedin}</a>
                    <a href="" download></a>
                </TextContainer2>
            </Tab>
      </Tabs>
        );
    };
}

export default BigRow