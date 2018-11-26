import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context'

let Container = styled.main`
  background-color:white ;
  min-height: 500px;
  padding: 10px 10%;
  
`
let List = styled.div`
  height: 80px;
  border: none;
  background: #FOFOFO;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 2rem;
  margin-top: 20px;
`


class Main extends Component {
  render(){
    return(
    <Context.Consumer>
       {(ctx) => {
          return <Container>
            {
              ctx.state.prescription.map((item, i) => {
                return <List key={i}>{item.patient_name}{i}</List>
              })
            }
          </Container>
           }}
    </Context.Consumer>
    )
  }
}


export default Main;