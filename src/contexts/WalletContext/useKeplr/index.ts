import { useEffect, useState } from "react";
// import { Connection, ProviderInfo } from "../types";
import { Dwindow } from "types";
import { IS_TEST } from "constants/env";

import { retrieveUserAction, saveUserAction } from "../helpers/prefActions";
import { junoTestnet } from "./chain-infos";
import { chainIds } from "constants/chains";
import { Wallet, WalletState } from "../types";
import { toast } from "react-toastify";

const actionKey = `keplr__pref`;
const dwindow: Dwindow = window;

const INSTALL_URL = "https://www.keplr.app/download";

export default function useKeplr(): Wallet {
  const [state, setState] = useState<WalletState>({
    status: "disconnected",
    connect,
  });

  /** persistent connection */
  useEffect(() => {
    retrieveUserAction(actionKey) === "connect" && connect(false);
  }, []);

  async function connect(isNew = true) {
    try {
      if (!dwindow.keplr) {
        if (!isNew) return; /** dont redirect persistent connection */
        return window.open(INSTALL_URL, "_blank", "noopener noreferrer");
      }

      setState({ status: "loading" });
      if (IS_TEST) {
        await dwindow.keplr.experimentalSuggestChain(junoTestnet);
      }
      await dwindow.keplr.enable(chainIds.juno);
      const key = await dwindow.keplr.getKey(chainIds.juno);
      setState({
        status: "connected",
        address: key.bech32Address,
        chainId: chainIds.juno,
        disconnect,
      });
      saveUserAction(actionKey, "connect");
    } catch (err) {
      if (isNew) {
        toast.error("Failed to connect to wallet.");
      }
      setState({ status: "disconnected", connect });
      saveUserAction(actionKey, "disconnect");
    }
  }

  function disconnect() {
    setState({ status: "disconnected", connect });
  }

  return { ...state, logo: "", id: "keplr", name: "Keplr", type: "cosmos" };
}
