import { aptos } from "./movement_utils";
import { InputViewFunctionData } from "@aptos-labs/ts-sdk";

const ACCOUNT = "b9cbcb36e290f1be7e1e151321d9d4679c3bea1392108ec85f9497c69200f5c1";
const MODULE = "Campaign";

const viewModuleFunction = async () => {
    const payload: InputViewFunctionData = {
        function: `${ACCOUNT}::${MODULE}::get_all_campaign`,
        typeArguments: [],
        functionArguments: []
    };
    const output = (await aptos.view({payload}));
    console.log(output);
}

viewModuleFunction();