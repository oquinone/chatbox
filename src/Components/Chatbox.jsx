import React, { Component } from 'react';
import './Chatbox.scss';

class ChatBox extends Component {
     
    render() { 
        return (
            // <body>
                <div id="window">
                    <div id="left">
                        <div id="user-info">

                        </div>
                    </div>

                    <div id="right">
                        <div id="display-messages">

                        </div>

                        <div id="textbox-div">
                            <textarea name="textbox" placeholder="Whats up Hanky!" id="textbox"></textarea>
                        </div>
                    </div>
                </div>
            // </body>
        );
    }
}
 
export default ChatBox;