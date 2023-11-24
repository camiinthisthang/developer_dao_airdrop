import { Constants } from "./shared/constants";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { goerli } from "viem/chains";

const projectId = Constants.WALLETCONNECT_PROJECT_ID!

const metadata = {
  name: 'Developer DAO Airdrop',
  description: 'Airdrop D_D membership to frens',
  url: 'soontm',
  icons: ['']
}

const chains = [goerli]

export const config = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig: config, projectId, chains })