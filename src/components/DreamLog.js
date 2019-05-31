import React, { Component } from 'react';
import bonbon from '../assets/bonbon.png';



// DreamLog is the form!
class DreamLog extends Component {


    // ONLY NEED CONSTRUCTOR AND COMPONENT DID MOUNT IF DEALING WITH ORIGINAL STATE

    
    render () {
        return (
            <main id="main">
                <a href='#main' class='skip-link' >Skip to main content.</a>

                <form action="submit" className="wrapper">
                    <div className="form-field">
                        
                        <label for ="name">Name or Alias:</label>
                        <input
                            type="text" id="name"
                            // (event) is to wait until event takes place then call the function handleChange
                            onChange={(event)=> {this.props.handleChange(event)}}
                            placeholder="Name or Alias"
                            // props is to refer to App
                            value={this.props.userName}
                            name='userName'
                        />
                    </div>
                    <div className="form-field">
                        <label for="date">Date:</label>
                        <input
                            // type="text"
                            type="date"
                            id="date"
                            min="2019-01-01" max="2020-12-31"

                            onChange= {(event) => { this.props.handleChange(event) }}
                            placeholder="Date this dream happened"

                            value={this.props.userDate}
                            name='userDate'
                            
                        />
                    </div>
                    <div className="form-field">
                        <label for="emotion">Emotion/Feeling: </label>
                        <input 
                            type="text" 
                            id="emotion"
                            onChange={(event) => { this.props.handleChange(event) }}
                            placeholder="In one word, how did your dream make you feel?"
                            value={this.props.userFeeling}
                            name='userEmotion' />
                    </div>
                    <div className="form-field">
                        
                        <label for="setting">Dream Setting:</label>
                        <input 
                            type="text" 
                            id="setting"
                            onChange={(event) => { this.props.handleChange(event) }}
                            placeholder="In what setting did your dream take place?"
                            value={this.props.userSetting}
                            name='userSetting' />
                    </div>
                    <div className="form-field-big">
                        <label for="description">What happened in your dream?</label>
                        


                        <textarea
                            cols="30" rows="10" 
                            id="description"
                            onChange={(event) => { this.props.handleChange(event) }}
                            placeholder="What Happened?"
                            value={this.props.userDescription}
                            name="userDescription"></textarea>
                    </div>
                    <button onClick={this.props.handleClick}>Submit</button>
                </form>
                <aside className="wrapper">
                    <img src={bonbon} alt={"cat sleeping in bag"} /> 
                </aside>
            </main>
        )
    }
}

export default DreamLog;