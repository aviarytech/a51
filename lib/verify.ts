// import assert from "assert";
// import { ALPHABET, base58, sha256 } from "./utils";

// /* verification methods */
// export const verifyDidSov = (val: string): boolean => {
//   return new RegExp(/^did:sov:[1-9A-HJ-NP-Za-km-z]{21,22}(?<namespace>(?::\w[-\w]*)*)$/).test(val);
// };
// export const didKey = (target: string, pubKey: Uint8Array): boolean => {
//   const keyStr = base58.encode(pubKey);
//   return keyStr.substr(0, target.length) === target;
// };
// export const sha256Hash = (target: string, pubKey: Uint8Array): boolean => {
//   const keyStr = Buffer.from(sha256.hash(pubKey)).toString("hex");
//   return keyStr.substr(0, target.length) === target;
// };
// export const noWork = (target?: string, pubKey?: Uint8Array): boolean => {
//   return true;
// };
