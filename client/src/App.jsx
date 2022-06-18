 import React from 'react'
 import {ethers} from 'ethers'
 
 function App() {
  
  const connectWallet=async()=>{
    try {
     const provider=new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts",[]);

      const signer=provider.getSigner()
     let balance = await provider.getBalance("0xDD279F7b68C3a6086a8073b2F5e0cc2E2313A06d")//your metamask address
      console.log(balance)

// Often you need to format the output to something more user-friendly,
// such as in ether (instead of wei)
const ethBal=ethers.utils.formatEther(balance)
console.log(ethBal)

const tx = await signer.sendTransaction({
  to: "0x24Cd069f9B5e87F275a7AfC8860dE3540A6c42AE",
  value: ethers.utils.parseEther("1.0")
});

console.log(tx)
 
     
    } catch (error) {
      console.log("errr",error)
    }
  }
 


   return (
     <div>
      <button onClick={connectWallet}>Open wallet</button>
     </div>
   )
 }
 
 export default App