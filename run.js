const bs58 = require("bs58");

const key = "DvicGuNHDjAHPzbaDMSui1NWvNSmoZkb9Lkppr6aWaVa";
const keyBuff = bs58.decode(key);
const sov = bs58.encode(keyBuff.slice(16));
console.log(sov);
