import { driver } from "did-method-key";

const genDidKey = async () => {
  const didDoc = await driver().generate();
  console.log(didDoc);
};

export { genDidKey };

setTimeout(async () => {
  const didDocument = await genDidKey(); // Ed25519 key type by default

  console.log(JSON.stringify(didDocument, null, 2)); // see DID Document above
}, 200);

// didDocument.keys
// // ->
// {
//   "did:key:z6MkqPnSmWhrV28rjGkGjCuT5Fzxm5WwL6jgAiYc4PvTWVny#z6MkqPnSmWhrV28rjGkGjCuT5Fzxm5WwL6jgAiYc4PvTWVny": {
//     "controller": "did:key:z6MkqPnSmWhrV28rjGkGjCuT5Fzxm5WwL6jgAiYc4PvTWVny",
//     "type": "Ed25519VerificationKey2018",
//     "privateKeyBase58": "3rACVtG71pbij7fvVenidrMjk9jDDMeBG7LeUt84cbyC5BCcAgyrpaDzGHAn38snSXbGKkNhaRKVMvSyt4bpAxgy",
//     "publicKeyBase58": "BwXQBGTR9UePcmua3dwcEASxwWF5vDVKUhdgE7xSbH1b"
//   },
//   "did:key:z6MkqPnSmWhrV28rjGkGjCuT5Fzxm5WwL6jgAiYc4PvTWVny#z6LSjGzxwJ5CdYH1mFFAn8NUQkyXW7zAGcFrTP5pGifBr2Ve": {
//     "id": "did:key:z6MkqPnSmWhrV28rjGkGjCuT5Fzxm5WwL6jgAiYc4PvTWVny#z6LSjGzxwJ5CdYH1mFFAn8NUQkyXW7zAGcFrTP5pGifBr2Ve",
//     "controller": "did:key:z6MkqPnSmWhrV28rjGkGjCuT5Fzxm5WwL6jgAiYc4PvTWVny",
//     "type": "X25519KeyAgreementKey2019",
//     "privateKeyBase58": "BGi7pTP2JHo1odGw3mTWnM4hZmyGWWaAPDne2YHY3VEB",
//     "publicKeyBase58": "8bpoQzGLY5ZGfrsQFUrX6Am3eyT3a15haQN8nG1f8eit"
//   }
// }
