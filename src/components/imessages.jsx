import React, { Component } from 'react';

class Conversation extends Component {
    state = { 
        conversation: [
            {textcontent: 'Salut !', fromMe: true},
            {textcontent: 'Ca va ?', fromMe: true},
            {textcontent: 'Ouai', fromMe: false},
        ]
    }

    render() { 
        return ( 
            <h3>Conv</h3>
         );
    }
}
 
export default Conversation;