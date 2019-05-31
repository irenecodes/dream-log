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
                                {/*<button onClick={() => this.props.removeDream(this.dreams.key)}>Remove from Log</button>*/}
                                <button onClick={this.props.removeDream}>Remove from Log</button>
                           
                           </div>
                        )

                    })
                }
           
            
            </div>

         
        )
    }

}
    

export default EntryDisplays;