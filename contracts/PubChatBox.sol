// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.9;


contract PubChatBox{
    address admin;
    struct MsgData{
        uint timestamp;
        address user;
        string userMsg;
    }

    MsgData[] public msgdatas;
    uint public totalMsgCount ;

    constructor(){
        admin = msg.sender;
    }

    function submitMsg(string memory _message) public {
        msgdatas.push(MsgData({
            user : msg.sender,
            userMsg : _message,
            timestamp : block.timestamp
        }));
        // MsgData storage md = msgdatas[totalMsgCount];
        // md.user = msg.sender;
        // md.userMsg = _message;
        // md.timestamp = block.timestamp;
        // totalMsgCount++;
    }

    function displayallmsgs() public view returns(MsgData[] memory){
        return msgdatas;
    }
}