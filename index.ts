import * as ed25519 from "@stablelib/ed25519";
import { Bls12381G2KeyPair } from "@mattrglobal/bls12381-key-pair";
import { hash } from "@stablelib/sha256";
import b58 from "b58";
import crypto from "crypto";

/* work methods */
export const didSov = (pubKey: Uint8Array): string => b58.encode(pubKey.slice(16));
export const didKey = (pubKey: Uint8Array): string => b58.encode(pubKey);
export const sha256Hash = (pubKey: Uint8Array): string => Buffer.from(hash(pubKey)).toString("hex");

/* key methods */
export const genEd25519 = async (): Promise<{ priv: Uint8Array; pub: Uint8Array }> => {
  const key = ed25519.generateKeyPair();
  return { priv: key.secretKey, pub: key.publicKey };
};
export const genBls12381 = async (): Promise<{ priv: Uint8Array; pub: Uint8Array }> => {
  const key = await Bls12381G2KeyPair.generate();
  return { priv: key.privateKeyBuffer, pub: key.publicKeyBuffer };
};
export const random = async (): Promise<{ priv: Uint8Array; pub: Uint8Array }> => {
  const rand = crypto.randomBytes(16);
  return { priv: rand, pub: rand };
};

/* key generator method - recursively searches for a key pair that matches the specified requirements */
export const genKey = async (
  target: string,
  keyGenMethod: () => Promise<{ priv: Uint8Array; pub: Uint8Array }> = genEd25519,
  workMethod: (pubKey: Uint8Array) => string = sha256Hash
): Promise<{ priv: string; privHash: string; pub: string; pubHash: string }> => {
  const key = await keyGenMethod();
  if (workMethod(key.pub).substr(0, target.length) === target) {
    return {
      priv: b58.encode(key.priv),
      privHash: Buffer.from(hash(key.priv)).toString("hex"),
      pub: b58.encode(key.pub),
      pubHash: Buffer.from(hash(key.pub)).toString("hex"),
    };
  }
  return genKey(target, keyGenMethod, workMethod);
};
