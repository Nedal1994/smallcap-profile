import React, { useState } from 'react';
import Web3 from 'web3';
import './WalletConnectButton.css';

const WalletConnectButton = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState('');

    const handleConnect = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                console.log('Connected accounts:', accounts);

                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    setIsConnected(true);
                }
            } catch (error) {
                console.error('Error connecting to wallet:', error);
                alert('Error connecting to wallet. Check console for details.');
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    return (
        <button 
            className="wallet-connect" 
            onClick={handleConnect}
        >
            {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
        </button>
    );
};

export default WalletConnectButton;
