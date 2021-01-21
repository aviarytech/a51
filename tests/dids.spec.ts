import { genDidKey } from "../lib/dids";

describe("did methods", () => {
  describe("did:key", () => {
    it(`generate valid did:key:doc`, async () => {
      expect(await genDidKey()).toBeTruthy();
    });
    // it(`did, bad method`, () => {
    //   expect(verifyDidSov("did:key:z6MkgHxqyP3Y8ag2fRpJHZwxwecGFm21usgUyvjfZdfEabdW")).toBeFalsy();
    // });
    // it(`invalid did, method id too long`, () => {
    //   expect(verifyDidSov("did:sov:4d4GkhPJWm2EveSj57yqNp1")).toBeFalsy();
    // });
    // it(`invalid did, method id too short`, () => {
    //   expect(verifyDidSov("did:sov:4d4GkhPJWm2EveS")).toBeFalsy();
    // });
    // it(`invalid did, method id invalid char`, () => {
    //   expect(verifyDidSov("did:sov:4d4GkhPJWm2IveSj57yqNp1")).toBeFalsy();
    // });
  });
});
