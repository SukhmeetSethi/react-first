import React from "react";
import MessageView from "./message-view";

function MessageList() {
    const message = {
        "from": "Sukhi",
        "status": "undefined",
        "content": "This is dynamic"
      }

    const messages =  [
        { 
            "id": "d2504a54",
            "from" : "John",
            "content" : "The event will start next week",
            "status" : "unread"
        },
        { 
            "id": "d2504a56",
            "from" : "Martha",
            "content" : "I am not going to event",
            "status" : "unread"
        },
        { 
            "id": "d2504a58",
            "from" : "Jacob",
            "content" : "Event can't start without me",
            "status" : "read"
        }
    ]
    
    const messageViewList = messages.map( message => <MessageView key={message.id}  statusMessage={message} />)
    return (
        <div className="container">
            <h1>Message List is</h1>
            {messageViewList}
        </div>
    )
}

export default MessageList;