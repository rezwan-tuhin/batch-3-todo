import { useState } from "react";

import {ethers} from 'ethers';

const WalletConnect = ({setProvider, setSigner}) => {

    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if(window.ethereum) {
            try{
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });

                setAccount(accounts[0]);

                const provider = new ethers.BrowserProvider(window.ethereum);
                setProvider(provider);
                const signer = await provider.getSigner();
                setSigner(signer)
            }catch(error) {
                console.error(error);
            }
        } else{
            alert('Please install Metamask');
        }
    }

  return (
    <div>
        {
            account ? <p>{`${account.slice(2,7)}... ... ${account.slice(-5)}`}</p> : <button className="bg-primary hover:bg-emerald-500 cursor-pointer transition-colors duration-300 ease-in-out px-3 py-2 rounded-lg text-gray-700"
            onClick={connectWallet}>Connect Wallet</button>
        }
    </div>
  )
}

export default WalletConnect;