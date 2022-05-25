
import React, {useEffect, useState} from "react";
import { Button, Comment, Form } from 'semantic-ui-react';
import PubChatBox_Contract from '../ethereum/PubChatBox';
import Message from "./Message";
import web3 from "../ethereum/web3";

const MessageBox = (props) => {

    let msgData;
    const [msgList, setMsgList] = useState('');
    const [message, setMessage] = useState('');
    const [msgSubmit, setMsgSubmit] = useState(false);
    useEffect(() => {
        const element = document.querySelector('.scroll-msg');
        // console.log(element);
        element.scrollTop = element.scrollHeight - element.clientHeight;
        // element.scrollTop = element.scrollHeight;
        loadMessages();
    }, [msgSubmit]);

    const loadMessages = async () => {
        const allmessages = await PubChatBox_Contract.methods.displayallmsgs().call()
        
        msgData = allmessages.map((message)=>{
            return <Message key={message.timestamp} msgdata={message}/>;
        })
        setMsgList(msgData);
    }

    const submitMessage = async () => {
        const accounts = await web3.eth.getAccounts();
        await PubChatBox_Contract.methods.submitMsg(message)
        .send({from: accounts[0]});
        setMsgSubmit(true);
        setMessage('')
    }
    return (
        <Comment.Group centered>
            <div className="scroll-msg">{msgList}</div>            
            <Form reply onSubmit={submitMessage}>
                <Form.TextArea value={message} onChange={(event)=>{setMessage(event.target.value)}}/>
                <Button disabled={ props.connection === '' && true } content='Add Comment' labelPosition='left' icon='edit' primary />
            </Form>
        </Comment.Group>
    )
}


export default MessageBox;