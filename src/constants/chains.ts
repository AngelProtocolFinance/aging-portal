import { IS_TEST } from "./env";

export type Chain = {
  type: "evm" | "terra" | "cosmos";
  name: string;
  rpc: string;
  lcd: string;
  txExplorer: string;
};

const infuraId = process.env.REACT_APP_INFURA_ID;

export const chains: { [key: string]: Chain } = IS_TEST
  ? {
      "uni-5": {
        type: "cosmos",
        name: "Juno Uni Testnet",
        lcd: "https://api.uni.junonetwork.io",
        rpc: "https://rpc.uni.junonetwork.io",
        txExplorer: "https://testnet.ping.pub/juno/tx/",
      },
      "pisco-1": {
        type: "terra",
        name: "Terra Pisco testnet",
        lcd: "https://pisco-lcd.terra.dev",
        rpc: "",
        txExplorer: "https://finder.terra.money/testnet/tx/",
      },
      5: {
        type: "evm",
        name: "Ethereum Goerli Testnet",
        rpc: `https://goerli.infura.io/v3/${infuraId}`,
        lcd: "",
        txExplorer: "https://goerli.etherscan.io/tx/",
      },
      97: {
        type: "evm",
        name: "Binance Testnet",
        rpc: "https://rpc.ankr.com/bsc_testnet_chapel",
        lcd: "",
        txExplorer: "https://testnet.bscscan.com/tx/",
      },
    }
  : {
      "juno-1": {
        type: "cosmos",
        name: "Juno Mainnet",
        lcd: "https://juno-api.polkachu.com",
        rpc: "https://juno-rpc.polkachu.com",
        txExplorer: "https://finder.terra.money/testnet/tx/",
      },
      "phoenix-1": {
        type: "terra",
        name: "Terra Mainnet",
        lcd: "https://phoenix-lcd.terra.dev",
        rpc: "",
        txExplorer: "https://finder.terra.money/mainnet/tx/",
      },
      1: {
        type: "evm",
        name: "Ethereum Mainnet",
        rpc: `https://mainnet.infura.io/v3/${infuraId}`,
        lcd: "",
        txExplorer: "https://etherscan.io/tx/",
      },

      56: {
        type: "evm",
        name: "Binance Mainnet",
        rpc: "https://rpc.ankr.com/bsc",
        lcd: "",
        txExplorer: "https://bscscan.com/tx/",
      },
    };
