<<<<<<< Updated upstream
import { Account, Address, privateToAddress, toBytes } from "@ethereumjs/util";
=======
import {
  Account,
  Address,
  privateToAddress,
  toBuffer,
} from "@nomicfoundation/ethereumjs-util";
>>>>>>> Stashed changes

import { GenesisAccount } from "../node-types";

import { isHexPrefixed } from "./isHexPrefixed";

export function makeAccount(ga: GenesisAccount) {
  let balance: bigint;

  if (typeof ga.balance === "string" && isHexPrefixed(ga.balance)) {
    balance = BigInt(ga.balance);
  } else {
    balance = BigInt(ga.balance);
  }

  const account = Account.fromAccountData({ balance });
<<<<<<< Updated upstream
  const pk = toBytes(ga.privateKey);
=======
  const pk = toBuffer(ga.privateKey);
>>>>>>> Stashed changes
  const address = new Address(privateToAddress(pk));
  return { account, address };
}
