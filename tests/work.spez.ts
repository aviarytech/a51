// import { verifyDidSov } from "../lib/verify";

// describe("work methods", () => {
//   describe("did:sov", () => {
//     it(`valid did`, () => {
//       expect(verifyDidSov("did:sov:4d4GkhPJWm2EveSj57yqNp")).toBeTruthy();
//     });
//     it(`invalid did, bad method`, () => {
//       expect(verifyDidSov("did:key:z6MkgHxqyP3Y8ag2fRpJHZwxwecGFm21usgUyvjfZdfEabdW")).toBeFalsy();
//     });
//     it(`invalid did, method id too long`, () => {
//       expect(verifyDidSov("did:sov:4d4GkhPJWm2EveSj57yqNp1")).toBeFalsy();
//     });
//     it(`invalid did, method id too short`, () => {
//       expect(verifyDidSov("did:sov:4d4GkhPJWm2EveS")).toBeFalsy();
//     });
//     it(`invalid did, method id invalid char`, () => {
//       expect(verifyDidSov("did:sov:4d4GkhPJWm2IveSj57yqNp1")).toBeFalsy();
//     });
//   });
// });
