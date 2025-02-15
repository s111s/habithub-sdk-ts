import { Ed25519PrivateKey, Aptos, AptosConfig, Network, NetworkToNetworkName } from "@aptos-labs/ts-sdk";
import dotenv from "dotenv";

const APTOS_NETWORK: Network = NetworkToNetworkName[Network.DEVNET];
const config = new AptosConfig({network: APTOS_NETWORK});
const aptos = new Aptos(config);

dotenv.config();
const OWNER_PRIVATE_KEY = process.env.OWNER_PRIVATE_KEY;

const getSigner = async () => {
    const privateKey = new Ed25519PrivateKey(OWNER_PRIVATE_KEY);
    const signer = await aptos.deriveAccountFromPrivateKey({privateKey});
    return signer
}

export {getSigner, aptos}