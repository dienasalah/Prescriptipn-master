import React,{Component} from 'React';
import ReactDOM from 'react-dom';
import Context from './context'
import Header from './haeder';
import Main from './Main';
import firebase from 'firebase'




// Initialize Firebase
var config = {
    apiKey: "AIzaSyBCtJ9hbksfohRTcdx1K2KsUSZSkjI9Ris",
    authDomain: "prescription-4b401.firebaseapp.com",
    databaseURL: "https://prescription-4b401.firebaseio.com",
    projectId: "prescription-4b401",
    storageBucket: "",
    messagingSenderId: "920922019423"
  };
  firebase.initializeApp(config);

class App extends Component{
constructor(){
super()
this.state={
   prescription : [{}],
   modalState: false,
   patient_name: '',
   patient_age  : ''

}
firebase.firestore().collection('prescription').orderBy('date', 'asc').onSnapshot((snapshot)=>{
    let prescription = []

    snapshot.forEach((doc)=>{
        prescription.push(doc.data())
      this.setState({
        prescription: prescription
      })
      })
      })
       }
render(){
    return(
        <Context.Provider value={{ 
            state: this.state,
            actions: {
    
                  toggle: ()=>{
                    this.setState({
                      modalState: !this.state.modalState
                    })
                  },
                  onChangeName: (value) =>{
                    this.setState({
                        patient_name: value
                    })
                  },
                  onChangeAge: (value) =>{
                    this.setState({
                        patient_age : value
                    })
                  }
        
               }
                }}>
    
            
                 <Header />
                  <Main  />
                </Context.Provider>

    )
}



}
ReactDOM.render(<App />, document.getElementById('root'))