import * as ed25519 from "@stablelib/ed25519";
import { Bls12381G2KeyPair } from "@mattrglobal/bls12381-key-pair";
import { hash } from "@stablelib/sha256";
import b58 from "b58";

/* work methods */
export const didSov = (pubKey: Uint8Array): string => b58.encode(pubKey.slice(16));
export const didKey = (pubKey: Uint8Array): string => b58.encode(pubKey);
export const sha256Hash = (pubKey: Uint8Array): string => Buffer.from(hash(pubKey)).toString("hex");

/* key methods */
export const genEd25519 = async (): Promise<{ priv: Uint8Array; pub: Uint8Array }> => {
  const key = ed25519.generateKeyPair();
  return {
    priv: key.secretKey,
    pub: key.publicKey,
  };
};
export const genBls12381 = async (): Promise<{ priv: Uint8Array; pub: Uint8Array }> => {
  const key = await Bls12381G2KeyPair.generate();
  return {
    priv: key.privateKeyBuffer,
    pub: key.publicKeyBuffer,
  };
};

/* key generator method - recursively searches for a key pair that matches the specified requirements */
export const genKey = async (
  target: string,
  keyGenMethod: () => Promise<{ priv: Uint8Array; pub: Uint8Array }> = genEd25519,
  workMethod: (pubKey: Uint8Array) => string = sha256Hash
): Promise<{ priv: string; pub: string }> => {
  const key = await keyGenMethod();
  if (workMethod(key.pub).substr(0, target.length) === target) {
    return {
      priv: b58.encode(key.priv),
      pub: b58.encode(key.pub),
    };
  }
  return genKey(target, keyGenMethod, workMethod);
};

// import { genKey, genEd25519, didKey } from "@aviarytech/a51";
// import fs from "fs";

const runLoop = async () => {
  var myArgs = process.argv.slice(1);

  const target = myArgs[1] || "A";
  console.log(`starting with target ${target}`);
  const output = await genKey(target, genEd25519, didKey);
  console.log(output);

  // fs.appendFile(`${target}.json`, JSON.stringify(output), function (err) {
  //   if (err) throw err;
  //   console.log("key added!");
  //   runLoop();
  // });
};

(async () => {
  runLoop();
})();
