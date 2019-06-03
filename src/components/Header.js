import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const bubble = <FontAwesomeIcon aria-hidden="true" icon={faComment} />


class Header extends Component {
    render () {
        return (
            <div>
                <header>
                    <h1>
                        Sleep Talk {bubble}
                    </h1>
                    <h2>
                        A site that helps you keep track of your dreams!
                    </h2>
                </header>
            </div>
        )
    }
}

export default Header;