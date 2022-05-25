
import React, {useEffect, useState} from "react";
import { Button, Comment, Divider } from 'semantic-ui-react';

const Message = (props) => {
    const {user, timestamp, userMsg} = props.msgdata;
    var toDate = new Date( timestamp *1000);
    const datetime = toDate.toLocaleString();
    return (
            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                    <Comment.Author>{user}</Comment.Author>
                    <Comment.Metadata>
                        <span>{datetime}</span>
                    </Comment.Metadata>
                    <Comment.Text>
                        {userMsg}
                    </Comment.Text>
                    {/* <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions> */}
                </Comment.Content><Divider />
            </Comment>          
    )
}


export default Message;