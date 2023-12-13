import Image from 'next/image'
import { Axiom, QueryV2 } from "@axiom-crypto/core";
import ConnectWallet from '@/components/ConnectWallet';
import { forwardSearchParams } from '@/lib/utils';
import LinkButton from '@/components/LinkButton';

const axiom = new Axiom({
  privateKey: process.env.PRIVATE_KEY_GOERLI as string,
  providerUri: process.env.PROVIDER_URI_GOERLI as string,
  version: "v2",
  chainId: 5, // Goerli
  mock: true, // generate Mock proofs for faster development
});
const query = (axiom.query as QueryV2).new();

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

interface Params {
  slug: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}


export default function Home({searchParams}:PageProps) {
  const connected = searchParams?.connected as string ?? "";
  console.log(searchParams);
  const renderButton = () => {
    if (connected) {
      return <LinkButton
        label="Check Eligibility"
        href={"/claim?" + forwardSearchParams(searchParams)}
      />;
    }
    return <ConnectWallet connected={connected} />;
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Gift D_D This Holiday Season</h1>
        <div className="text-center">
        Anyone existing Developer DAO member is eligible to send 40 $CODE tokens to someone of their choice via 
        an airdrop, minting a new D_D member. You may need to wait a few minutes
        after sending the tokens for the indexer to pick it up.
      </div>
      {renderButton()}
      </div>
    </main>
  )
}
