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
                           <div>
                                <p>{dream.value.date}</p>
                                <p>{dream.value.description}</p>
                                <p>{dream.value.emotion}</p>
                                <p>{dream.value.name}</p>
                                <p>{dream.value.setting}</p>
                           
                           </div>
                        )

                    })
                }
           
            
            </div>

         
        )
    }

}
    

export default EntryDisplays;