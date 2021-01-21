import basex from "base-x";
import sha256 from "@stablelib/sha256";

const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const base58 = basex(ALPHABET);

export { ALPHABET, base58, sha256 };
