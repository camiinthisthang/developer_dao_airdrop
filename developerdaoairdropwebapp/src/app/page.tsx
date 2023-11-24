import Image from 'next/image'
import { Axiom, QueryV2 } from "@axiom-crypto/core";

const axiom = new Axiom({
  privateKey: process.env.PRIVATE_KEY_GOERLI as string,
  providerUri: process.env.PROVIDER_URI_GOERLI as string,
  version: "v2",
  chainId: 5, // Goerli
  mock: true, // generate Mock proofs for faster development
});
const query = (axiom.query as QueryV2).new();


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Gift D_D This Holiday Season</h1>
        <div className="text-center">
        Anyone existing Developer DAO member is eligible to send 40 $CODE tokens to someone of their choice via 
        an airdrop, minting a new D_D member. You may need to wait a few minutes
        after sending the tokens for the indexer to pick it up.
      </div>
      </div>
    </main>
  )
}
