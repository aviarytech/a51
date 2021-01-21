import * as ed25519 from "@stablelib/ed25519";
import { Bls12381G2KeyPair } from "@mattrglobal/bls12381-key-pair";
import bs58 from "bs58";
import crypto from "crypto";

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
export const sha256HashKey = (
  target: string,
  input: string,
  n: string
): Promise<{ hash: string; nonce: string }> => {
  const newHash = hash(Buffer.from(input)).toString("hex");
  return { hash: newHash, nonce: n };
};

/* key generator method - recursively searches for a key pair that matches the specified requirements */
export const genKey = async (
  target: string,
  keyGenMethod: () => Promise<{ priv: Uint8Array; pub: Uint8Array }> = genEd25519,
  workMethod: (target: string, pubKey: Uint8Array) => boolean = sha256Hash
): Promise<{ priv: string; privHash: string; pub: string; pubHash: string }> => {
  const key = await keyGenMethod();
  if (workMethod(target, key.pub)) {
    return {
      priv: bs58.encode(key.priv),
      privHash: Buffer.from(hash(key.priv)).toString("hex"),
      pub: bs58.encode(key.pub),
      pubHash: Buffer.from(hash(key.pub)).toString("hex"),
    };
  }
  return genKey(target, keyGenMethod, workMethod);
};

export const genHash = async (
  target: string,
  keyGenMethod: () => Promise<{ priv: Uint8Array; pub: Uint8Array }> = genEd25519,
  workMethod: (target: string, pubKey: Uint8Array) => boolean = sha256Hash
): Promise<{ priv: string; privHash: string; pub: string; pubHash: string }> => {
  const key = await keyGenMethod();
  if (workMethod(target, key.pub)) {
    return {
      priv: bs58.encode(key.priv),
      privHash: Buffer.from(hash(key.priv)).toString("hex"),
      pub: bs58.encode(key.pub),
      pubHash: Buffer.from(hash(key.pub)).toString("hex"),
    };
  }
  return genKey(target, keyGenMethod, workMethod);
};
