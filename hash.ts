import { hash } from "@stablelib/sha256";

const combineAndHash = (part1, part2) => {
  const firstBytes = new Uint8Array(Buffer.from(part1).buffer);
  const nextBytes = new Uint8Array(Buffer.from(part2).buffer);
  const value = Buffer.concat([firstBytes, nextBytes]);
  return Buffer.from(hash(value)).toString("hex");
};

console.log(combineAndHash("Varyag", "11438750"));
