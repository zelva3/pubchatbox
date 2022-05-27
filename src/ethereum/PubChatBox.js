import PubChatBox from '../abis/PubChatBox.json';
import web3 from '../ethereum/web3';

const PubChatBox_Contract = new web3.eth.Contract(
    PubChatBox.abi,
    "0x9a560c9740723D80A712FB7F096c3ee293C7C0C2")
    
    // 0x5B301e5168f6eD5f6240Bb2Ce78C1585e08A0d33
export default PubChatBox_Contract;