import React, {Component} from "react";
import Pizza from "../images/pizza.jpeg";
import styled from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    opacity: 0.8;
    &:hover {
        opacity: 0.6;
    }
    `
const Container = styled.div`
    margin-right: 0px;
    margin-left: 0px;
    padding-top: 20px;
`

const Paragraph = styled.p`
    font-size: large;
    `
const Center = styled.div`
    align-items: center;
    justify-content: center;
`
class Home extends Component {
   
    render() {
        return(
            <Container className="container-fluid">
                <Center className="row" >
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Image src={Pizza} style={{padding:"10px 10px 10px 10px"}}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <Paragraph > 
                        With the introduction of voice assistants, a demand has risen for organic conversations and commands to occur between 
                        the speaker and the automated listener. Ordering from restaurants has traditionally stuck to a few traditional mediums: 
                        In person, over the phone, or via the internet. However, voice assistants are emerging into this product space, but with 
                        limited functionality, often utilizing menu trees to tediously guide users through ordering. Entree.AI introduces an integrated
                        platform to seamlessly order with Natural Language Processing to make ordering from restaurants feel as fluid as an actual order
                        with a waiter.
                    </Paragraph>
                    </div>
                </Center>

            </Container>
        );
    }
}

export default Home