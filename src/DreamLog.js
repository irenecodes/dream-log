import React, { Component } from 'react';



// DreamLog is the form!
class DreamLog extends Component {


    // ONLY NEED CONSTRUCTOR AND COMPONENT DID MOUNT IF DEALING WITH ORIGINAL STATE

    
    render () {
        return (
            <form action="submit">
                <div>
                    <p>Name or Alias: </p>
                    <input
                        type="text"
                        // (event) is to wait until event takes place then call the function handleChange
                        onChange={(event)=> {this.props.handleChange(event)}}
                        placeholder="Name or alias"
                        // props is to refer to App
                        value={this.props.userName}
                        name='userName'
                    />
                </div>
                <div>
                    <p>Day</p>
                    <input
                        type="text"
                        onChange= {(event) => { this.props.handleChange(event) }}
                        placeholder="Date this dream happened"

                        value={this.props.userDate}
                        name='userDate'
                    />
                </div>
                <div>
                    <p>Emotion/Feeling:</p>
                    <input 
                        type="text" 
                        onChange={(event) => { this.props.handleChange(event) }}
                        placeholder="In one word, how did your dream make you feel?"
                        value={this.props.userFeeling}
                        name='userEmotion' />
                </div>
                <div>
                    <p>Dream Location/Setting:</p>
                    <input 
                        type="text" 
                        onChange={(event) => { this.props.handleChange(event) }}
                        placeholder="In what setting did your dream take place?"
                        value={this.props.userSetting}
                        name='userSetting' />
                </div>
                <div>
                    <p>What Happened?</p>
                    <input 
                        type="text" 
                        onChange={(event) => { this.props.handleChange(event) }}
                        placeholder="What Happened?"
                        value={this.props.userDescription}
                        name="userDescription" />
                </div>
                <button onClick={this.props.handleClick}>Submit</button>
            </form>
        )
    }
}

export default DreamLog;