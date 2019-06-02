import React, { Component } from 'react';
import bonbon from '../assets/bonbon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

const bed = <FontAwesomeIcon icon={faBed} />

class DreamLog extends Component {
    // ONLY NEED CONSTRUCTOR AND COMPONENT DID MOUNT IF DEALING WITH ORIGINAL STATE
    render () {
        return (
            <main id="main">
                <a href='#main' className='skip-link' >Skip to main content.</a>

                <form action="submit" className="wrapper">
                    <div className="form-field"> 
                        <label for ="name">Name or Alias:*</label>
                        <input
                            type="text" id="name"
                            // (event) is to wait until event takes place then call the function handleChange
                            onChange={(event)=> {this.props.handleChange(event)}}
                            placeholder="i.e. Pikachu"
                            value={this.props.userName}
                            name='userName'
                            required={true}
                        />
                    </div>
                    <div className="form-field">
                        <label for="date">Date:*</label>
                        <input
                            type="date"
                            id="date"
                            min="2019-01-01" max="2020-12-31"
                            onChange= {(event) => { this.props.handleChange(event) }}
                            value={this.props.userDate}
                            name='userDate'
                            required={true}
          
                        />
                    </div>
                    <div className="form-field">
                        <label for="emotion">Emotion/Feeling (Optional): </label>
                        <input 
                            type="text" 
                            id="emotion"
                            onChange={(event) => { this.props.handleChange(event) }}
                            placeholder="i.e. Sad"
                            value={this.props.userFeeling}
                            name='userEmotion'
                             />
                    </div>
                    <div className="form-field">
                        
                        <label for="setting">Dream Setting (Optional):</label>
                        <input 
                            type="text" 
                            id="setting"
                            onChange={(event) => { this.props.handleChange(event) }}
                            placeholder="i.e. In Lt. Surge's gym"
                            value={this.props.userSetting}
                            name='userSetting' />
                    </div>
                    <div className="form-field-big">
                        <label for="description">What happened in your dream?*</label>
                        <textarea
                            cols="20" rows="10" 
                            id="description"
                            onChange={(event) => { this.props.handleChange(event) }}
                            placeholder="Ash was being pushy and pressuring me to evolve into Raichu, and it was very heartbreaking but in the end, he did not go through with it. I also met a girl named Irene who was suffering from React week and I sympathized with her."
                            value={this.props.userDescription}
                            name="userDescription"
                            required={true}></textarea>
                    </div>
                    <button onClick={this.props.handleClick}>Submit {bed}</button>
                </form>
                <aside className="wrapper">
                    <img src={bonbon} alt={"Cat sleeping in bag."} /> 
                </aside>
            </main>
        )
    }
}

export default DreamLog;