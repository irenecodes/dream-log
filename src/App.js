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
      isLoading: true,
      // how to put loading state for firebase?

      
    }
  }

  // makes request for data to use in the component
  componentDidMount () {
    // created variable that holds reference to database
    const dbRef = firebase.database().ref();
    // watches for changes to values - updates when changes instantly
    dbRef.on('value', (response) => {
      // to not tarnish original
      const newState = [];
      // variable to store every value in database
      const dreams = response.val();
      // assigns kv pairs to newState object
      // key refers to the unique ID of the dream stored in the Firebase database.
      // dreams[key] refers to the associated dream stored in Firebase.
      for(let key in dreams) {
        newState.push({
          key: key,
          value: dreams[key],
        });
      }

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
// error handling if required fields are not complete
    if (
      this.state.userName === "" ||
      this.state.userDate === "" ||
      this.state.userDescription === "") {
      alert('Please fill required fields.')
      
    } else {
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
      this.setState({
        userName: "",
        userDate: "",
        userEmotion: "",
        userSetting: "",
        userDescription: "",
      })
    }
  }

  removeDream(dreamId) {
    console.log('hello, dream', dreamId)
    // here we create a reference to the database at the dream's ID
    const dbRef = firebase.database().ref(dreamId);
    dbRef.remove();
  }

// render start
  render () {
    return (
      <div className = "App">
        <div>
          <Header />
          <section className="about wrapper">
            <p>How to use: Fill in the required fields so you can recollect details from your dream to share as a story, or remember for yourself!</p>
            <p>* denotes required field</p>
          </section>
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

        <div className="display-dreams">
          <div className="wrapper display-dreams-content">
            {this.state.dreams.map((dream) => {
              return <EntryDisplays dream={dream} removeDream={this.removeDream} />
            })}
            </div>
        </div>


        <footer className = "wrapper">
          <p>Coded by: Irene Truong. Picture of sleeping cat provided by Soo.</p>
        </footer>
      </div>
    )
  }
// render end
}

export default App;
