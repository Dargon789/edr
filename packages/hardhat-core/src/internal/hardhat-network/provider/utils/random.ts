<<<<<<< Updated upstream
import type EthereumjsUtilT from "@ethereumjs/util";
import type * as UtilKeccakT from "../../../util/keccak";

export class RandomBufferGenerator {
  private constructor(private _nextValue: Uint8Array) {}
=======
import type EthereumjsUtilT from "@nomicfoundation/ethereumjs-util";
import type * as UtilKeccakT from "../../../util/keccak";

export class RandomBufferGenerator {
  private constructor(private _nextValue: Buffer) {}
>>>>>>> Stashed changes

  public static create(seed: string): RandomBufferGenerator {
    const { keccak256 } = require("../../../util/keccak") as typeof UtilKeccakT;

    const nextValue = keccak256(Buffer.from(seed));

    return new RandomBufferGenerator(nextValue);
  }

<<<<<<< Updated upstream
  public next(): Uint8Array {
=======
  public next(): Buffer {
>>>>>>> Stashed changes
    const { keccak256 } = require("../../../util/keccak") as typeof UtilKeccakT;

    const valueToReturn = this._nextValue;

    this._nextValue = keccak256(this._nextValue);

    return valueToReturn;
  }

<<<<<<< Updated upstream
  public seed(): Uint8Array {
    return this._nextValue;
  }

=======
>>>>>>> Stashed changes
  public setNext(nextValue: Buffer) {
    this._nextValue = Buffer.from(nextValue);
  }

  public clone(): RandomBufferGenerator {
    return new RandomBufferGenerator(this._nextValue);
  }
}

export const randomHash = () => {
<<<<<<< Updated upstream
  const { bytesToHex: bufferToHex } =
    require("@ethereumjs/util") as typeof EthereumjsUtilT;
=======
  const { bufferToHex } =
    require("@nomicfoundation/ethereumjs-util") as typeof EthereumjsUtilT;
>>>>>>> Stashed changes
  return bufferToHex(randomHashBuffer());
};

const generator = RandomBufferGenerator.create("seed");
<<<<<<< Updated upstream
export const randomHashBuffer = (): Uint8Array => {
=======
export const randomHashBuffer = (): Buffer => {
>>>>>>> Stashed changes
  return generator.next();
};

export const randomAddress = () => {
<<<<<<< Updated upstream
  const { Address } = require("@ethereumjs/util") as typeof EthereumjsUtilT;
=======
  const { Address } =
    require("@nomicfoundation/ethereumjs-util") as typeof EthereumjsUtilT;
>>>>>>> Stashed changes
  return new Address(randomAddressBuffer());
};

export const randomAddressString = () => {
<<<<<<< Updated upstream
  const { bytesToHex: bufferToHex } =
    require("@ethereumjs/util") as typeof EthereumjsUtilT;
  return bufferToHex(randomAddressBuffer());
};

const addressGenerator = RandomBufferGenerator.create("seed");
export const randomAddressBuffer = (): Uint8Array => {
  return addressGenerator.next().slice(0, 20);
};
=======
  const { bufferToHex } =
    require("@nomicfoundation/ethereumjs-util") as typeof EthereumjsUtilT;
  return bufferToHex(randomAddressBuffer());
};

export const randomAddressBuffer = () => randomHashBuffer().slice(0, 20);
>>>>>>> Stashed changes
