import { movement } from "./movement_utils";
import { InputViewFunctionData } from "@aptos-labs/ts-sdk";

const ACCOUNT = "0x1ca6e301cd10d0245a1952a6d376654f3cbb208ddef826be65ffe9503061b0cb";
const MODULE = "CampaignDemo";

const viewModuleFunction = async () => {
    const payload: InputViewFunctionData = {
        function: `${ACCOUNT}::${MODULE}::get_all_campaign`,
        typeArguments: [],
        functionArguments: []
    };
    const output = (await movement.view({payload}));
    console.log(output);
}

viewModuleFunction();