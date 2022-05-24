import PubChatBox from '../abis/PubChatBox.json';
import web3 from '../ethereum/web3';

// const networkId = await web3.eth.net.getId();
// const CrowdFund_Contract = new web3.eth.Contract(CrowdFund.abi, CrowdFund.networks[networkId].address)
const PubChatBox_Contract = new web3.eth.Contract(
    PubChatBox.abi,
    "0x5B301e5168f6eD5f6240Bb2Ce78C1585e08A0d33")

    // 0xE78ce6A346eBe7e0F73ae101843aC2Df366b8c1A
export default PubChatBox_Contract;