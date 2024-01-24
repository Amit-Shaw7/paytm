import { atom } from "recoil";
import { getBalance } from "../apiCalls/balance";

const balanceState = atom({
    key: "balanceState",
    default: await getBalance(),
});

export default balanceState;