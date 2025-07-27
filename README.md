# 🧾 NFT Marketplace – Fullstack DApp Project

## 📌 Overview
This repository contains my own implementation of an NFT Marketplace, inspired by Patrick Collins' tutorial but adapted and customized by me. It includes both smart contracts and optional frontend integration to simulate real-world NFT listing, buying, and selling.

---

## 🧱 Features
- List NFTs for sale
- Buy listed NFTs with native currency
- Cancel NFT listings
- Update prices for listed NFTs
- Withdraw proceeds as a seller
- Event emissions for all major actions

---

## 🗂️ Project Structure
| Folder/File | Description |
|-------------|-------------|
| `contracts/` | Solidity contracts including `NftMarketplace.sol` |
| `scripts/`   | Deployment & interaction scripts using Hardhat |
| `test/`      | Unit tests for smart contracts (Chai + Mocha) |
| `frontend/`  | React (or other) frontend to interact with contracts |
| `.env.example` | Environment variable template |
| `README.md` | Project documentation (this file) |

---

## 🛠️ Technologies Used
- Solidity (Smart Contracts)
- Hardhat (Development Framework)
- Ethers.js (Web3 Interaction)
- React (Frontend UI – optional)
- Chainlink (For price feeds if needed)

---

## 🚀 Setup Instructions
### 1. Clone the Repo
```bash
git clone https://github.com/your-username/nft-marketplace.git
cd nft-marketplace
```

### 2. Install Dependencies
```bash
yarn  # or npm install
```

### 3. Environment Setup
Create a `.env` file:
```env
SEPOLIA_RPC_URL=your_rpc_url
PRIVATE_KEY=your_private_key
ETHERSCAN_API_KEY=your_etherscan_key
```

### 4. Compile Contracts
```bash
yarn hardhat compile
```

### 5. Deploy Contracts
```bash
yarn hardhat deploy --network sepolia  # or localhost
```

---

## 🧪 Run Tests
```bash
yarn hardhat test
```

---

## 🖼 Frontend
If you have a frontend integrated:
```bash
cd frontend
yarn install
yarn dev
```
Make sure you’ve connected your wallet and selected the correct network.

---

## 📬 Author
**Sanyam**  
NFT and Web3 enthusiast. Open to contributions and collaborations.

---

> 🎯 Perfect for demonstrating your blockchain knowledge in NFT infrastructure and decentralized commerce.
