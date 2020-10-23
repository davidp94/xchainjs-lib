import { CosmosSDK, PrivKey } from 'cosmos-client';
import { BroadcastTxCommitResult, Coin, PaginatedQueryTxs } from 'cosmos-client/api';
import { SearchTxParams, TransferParams } from './types';
export declare class CosmosSDKClient {
    sdk: CosmosSDK;
    server: string;
    chainId: string;
    prefix: string;
    private derive_path;
    constructor(server: string, chainId: string);
    setPrefix: () => void;
    getAddressFromPrivKey: (privkey: PrivKey) => string;
    getPrivKeyFromMnemonic: (mnemonic: string) => PrivKey;
    checkAddress: (address: string) => boolean;
    getBalance: (address: string) => Promise<Coin[]>;
    searchTx: ({ messageAction, messageSender, page, limit, txMinHeight, txMaxHeight, }: SearchTxParams) => Promise<PaginatedQueryTxs>;
    transfer: ({ privkey, from, to, amount, asset, memo }: TransferParams) => Promise<BroadcastTxCommitResult>;
}