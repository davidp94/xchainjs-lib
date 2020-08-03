import * as Bitcoin from 'bitcoinjs-lib';
import * as Utils from './utils';
/**
 * Class variables accessed across functions
 */
declare enum Network {
    TEST = "testnet",
    MAIN = "mainnet"
}
/**
 * BitcoinClient Interface. Potentially to become AsgardClient
 */
interface BitcoinClient {
    setNetwork(net: Network): void;
    getNetwork(net: Network): Bitcoin.networks.Network;
    generatePhrase(): string;
    setPhrase(phrase?: string): void;
    validatePhrase(phrase: string): boolean;
    getAddress(): string;
    validateAddress(address: string): boolean;
    scanUTXOs(address: string): Promise<void>;
    getBalance(): number;
    vaultTx(addressVault: string, valueOut: number, memo: string, feeRate: number): Promise<string>;
    normalTx(addressTo: string, valueOut: number, feeRate: number): Promise<string>;
}
/**
 * Implements Client declared above
 */
declare class Client implements BitcoinClient {
    net: Network;
    phrase: string;
    electrsAPI: string;
    utxos: Utils.UTXO[];
    constructor(_net?: Network, _electrsAPI?: string, _phrase?: string);
    generatePhrase: () => string;
    setPhrase: (phrase?: string | undefined) => void;
    purgeClient: () => void;
    validatePhrase(phrase: string): boolean;
    setNetwork(_net: Network): void;
    getNetwork(net: Network): Bitcoin.networks.Network;
    setElectrsAPI(endpoint: string): void;
    getAddress: () => string;
    private getBtcKeys;
    validateAddress: (address: string) => boolean;
    scanUTXOs: (address: string) => Promise<void>;
    getBalance: () => number;
    private getChange;
    getTransactions: (address: string) => Promise<Array<object>>;
    vaultTx: (addressVault: string, valueOut: number, memo: string, feeRate: number) => Promise<string>;
    normalTx: (addressTo: string, valueOut: number, feeRate: number) => Promise<string>;
}
export { Client, Network };
