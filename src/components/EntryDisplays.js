import React, { Component } from 'react';


// EntryDisplays shows the results!
class EntryDisplays extends Component {
    render () {
        return (
            // <p>hi</p>
            <div>
                {
                    this.props.dreams.map((dream) => {
                        return (
                            <div className="per-dream">
                                <h3>{dream.value.name}'s dream log</h3>
                                <p>{dream.value.date}</p>
                                
                                <p>{dream.value.emotion}</p>
                                
                                <p>{dream.value.setting}</p>
                                <p>{dream.value.description}</p>
                           
                           </div>
                        )

                    })
                }
           
            
            </div>

         
        )
    }

}
    

export default EntryDisplays;