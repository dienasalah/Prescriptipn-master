import React, { Component } from 'react';
import Context from './Context';
import styled from 'styled-Components';
import ReactModal from 'react-modal'



let Container = styled.header `
display: flex;
padding: 0px ;
align-items: center;
justify-content: space-between;
background-color: #132E41;
height: 120px;
width: 100%;
box-shadow: 2px 10px 15px #707070;
`
let TextInput = styled.input`
display: block;
border: 2px solid #000;
width: 100%;
margin: 10px 0px;
height: 40px;
font-size: 1.4rem;
`


let Add = styled.button `


background-color: #009FB4;
border: none;
border-radius: 60px;
width: 180px;
height: 50px;
font-size: 16px;
font-family: Arial;
font-weight: bold;
color: white;
margin-right: 40px;

`
let Title = styled.div` 
font-family: Magneto;
    padding-top: 85px;
    position: absolute;
    color: white;
    padding-left: 120px;
    font-size: 35px;


`


class Header extends Component {
    render() {
      return (
        <Context.Consumer>
          {
            (ctx)=>{
              return (
                <Container>
                  
                <ReactModal isOpen={ctx.state.modalState}>
                  <h1>
                    Prescription
                  </h1>
                  <TextInput value={ctx.state.patient_name} 
                  onChange={(event)=>{ctx.actions.onChangeName(event.target.value)}} 
                  placeholder="Patient Name" type="text"/>

                  <TextInput 
                  onChange={(event)=>{ctx.actions.onChangeAge(event.target.value)}} 
                  value={ctx.state.patient_age}
                  placeholder="Patient Age"  
                  type="text"/>
                 
                  <Button onClick={()=>{

                    firebase.firestore().collection('prescription').add({
                      patient_name: ctx.state.patient_name,
                      patient_age: ctx.state.patient_age,
                      date: Date.now()
                    })

                    ctx.actions.toggle()
                  }}>Save</Button>
                  
                    </ReactModal>
                  <img width="120px" height="120px" src={require('./assets/logo.jpg')}></img>
                  <Title>Dr.Diena Salah</Title>
                  <Add onClick={() => {
                  ctx.actions.toggle()
                  }}>Add Prescription</Add>
                  
                </Container>
              )
            }
          }
        </Context.Consumer>
      )
    }
  }
  
  export default Header