import BuildQuery from "@/components/claim/BuildQuery";
import Title from "@/components/ui/Title";
import autoAirdropJson from '@/lib/abi/AutonomousAirdrop.json'; //change this to our contractabi 
import { CircuitInputs } from "@/lib/circuit/circuit"; //still need to add our circuit 
import { bytes32 } from "@/lib/utils";
import { Constants } from "../../../shared/constants"

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

export default async function Claim({ searchParams }: PageProps) {
  const connected = searchParams?.connected as string ?? "";
  const blockNumber = searchParams?.blockNumber as string ?? "";
  const address = searchParams?.address as string ?? "";


  const inputs: CircuitInputs = {
    blockNumber: Number(blockNumber),
    userAddress: address
  }

  return (
    <>
      <Title>
        Send $CODE
      </Title>
      <div className="text-center">
        Please wait while we generate a compute proof in wasm for the Axiom Query. Once complete, you can click the buttom below to send $CODE to a friend. 
        $CODE is purely used for demo and testing purposes and holds no financial or nonmonetary value.
      </div>
      <div className="flex flex-col gap-2 items-center">
        <BuildQuery
          inputs={inputs}
          callbackAddress={Constants.CODE_SEND_ADDR}
          callbackExtraData={bytes32(connected)}
          refundee={connected}
          sendTokenABI={autoAirdropJson.abi} // replace this with our abi
        />
      </div>
    </>
  )
}