//import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-ceramic/packages/key-did-resolver/lib/index.js';

import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-multibase+multicodecTest2/compressKey/js-ceramic/packages/key-did-resolver/lib/index.js';

/*
console.log(keyDIDResolver);

const resolverRegistry = keyDIDResolver.default.default.getResolver();

console.log('key did resolver object');
console.log(keyDIDResolver);

console.log(resolverRegistry);

const resolve = resolverRegistry.key

console.log(resolve)
*/

const resolverRegistry = keyDIDResolver.default.default.getResolver();

//console.log('key did resolver object');
// console.log(keyDIDResolver);

//console.log(resolverRegistry);

const resolve = resolverRegistry.key

 let parsedDid = {
      id: "zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z",
      did: 'did:key:zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z',
      method: "key",
      didUrl: 'did:key:zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z/some/path',
      path: '/some/path'
}

let doc = await resolve('did:key:zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z', parsedDid, {}, { accept: 'application/did+ld+json' })

console.log(doc)
