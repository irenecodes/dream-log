import React, { Component } from 'react';
import firebase from './components/firebase';
// import logo from './logo.svg';
import DreamLog from './components/DreamLog';
import EntryDisplays from './components/EntryDisplays';
import Header from './components/Header';
import './styles/App.scss';


// remember to add a loading state - see museum codealong

// starting state is empty
class App extends Component {
  constructor() {
    super();
    this.state = {
      // user info
      userName: "",
      userDate: "",
      userEmotion: "",
      userSetting: "",
      userDescription: "",

      // firebase info stored here
      dreams: [],

      // loading state
      // isLoading: true,
      // how to put loading state for firebase?
      
    }
  }

  // makes request for data to use in the component
  componentDidMount () {
    // created variable that holds reference to database
    const dbRef = firebase.database().ref();
    // watches for changes to values - updates when changes instantly
    dbRef.on('value', (response) => {
      // console.log(response.val());

      // to not tarnish original
      const newState = [];
// do i need this?
      // variable to store every value in our database
      const dreams = response.val();
      console.log(dreams);

      // addes unique key property //data is an object, so we iterate through it using a for in loop 
      // assigns kv pairs to newState object
      for(let key in dreams) {
        newState.push({
          key: key,
          value: dreams[key],
        });
      }

      // don't interfere with original data
      // dream = 1

      // dream + 3

      // dream = dream + 3

      // newstate = dream + 3
      // newstate = 4

      // dream = newstate



      this.setState({
// puts all the new states in the empty array
        dreams: newState,
      })
    });
  }

// event handlers
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('clicking');

    // want to create a value for each of the described in form and then push to firebase
    const newEntry = {
      name: this.state.userName,
      date: this.state.userDate,
      emotion: this.state.userEmotion,
      setting: this.state.userSetting,
      description: this.state.userDescription,
    };

    // data stored in this variable in firebase
    const dbRef = firebase.database().ref();
    dbRef.push(newEntry);

    // after click, reset field
    this.setState = {
      userName: "",
      userDate: "",
      userEmotion: "",
      userSetting: "",
      userDescription: "",
    }

  }

// render start
  render () {
    return (
      <div className = "App">

        <div>
          <Header />
        </div>
        

        <div>
          <DreamLog 
          // define these functions and strings here so they can be passed down to DreamLog
          handleChange={this.handleChange}
          userName={this.state.userName}
          userDate={this.state.userDate}
          userEmotion={this.state.userEmotion}
          userSetting={this.state.userSetting}
          userDescription={this.state.userDescription}
          handleClick={this.handleClick} />
        </div>

        <div className="display-dreams wrapper">
          <EntryDisplays 
          dreams={this.state.dreams}
          />

        
        </div>
      

          
        

      </div>
    )
  }
// render end
}

export default App;
