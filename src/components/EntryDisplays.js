import React, { Component } from 'react';

// importing font-awesome icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// animated css library import
import { Animated } from "react-animated-css";

// font-awesome icon import
const trash = <FontAwesomeIcon aria-hidden="true" icon={faTrash} /> 

// EntryDisplays shows the results!
class EntryDisplays extends Component {
    render () {
        const {dream} = this.props;
        return (
            <Animated animationIn="fadeInDownBig"  
            animationInDuration={3000}  isVisible={true}>
            
                
                <div className="per-dream">
                    <h3>{dream.value.name}'s dream log</h3>
                    <div className="paired-info">
                        <h4>Dated:</h4><p>{dream.value.date}</p>
                    </div>

                    <div className="paired-info">
                        <h4>Feeling:</h4><p>{dream.value.emotion}</p>
                    </div>
                    
                    <div className="paired-info">
                        <h4>Dream Setting:
                        </h4>
                        <p>{dream.value.setting}</p>
                    </div>
                    <div className="paired-info">
                        <h4>
                        Description of Dream:</h4>
                        <p>{dream.value.description}</p>
                    </div>

                    
                    <button onClick={() => this.props.removeDream(dream.key)}>Remove from Log {trash}
                    </button>      
                </div>
            </Animated>
        )
    }

}
    

export default EntryDisplays;