import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const trash = <FontAwesomeIcon icon={faTrash} /> 

// EntryDisplays shows the results!
class EntryDisplays extends Component {
    render () {
        const {dream} = this.props;
        console.log(dream)
        return (
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
                <button onClick={() => this.props.removeDream(dream.key)}>Remove from Log {trash}</button>      
            </div>
        )
    }

}
    

export default EntryDisplays;