//import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-ceramic/packages/key-did-resolver/lib/index.js';

import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-multibase+multicodecTest2/compressKey/js-ceramic/packages/key-did-resolver/lib/index.js';

const resolverRegistry = keyDIDResolver.default.default.getResolver();

console.log(resolverRegistry);

const resolve = resolverRegistry.key

 let parsedDid = {
      id: "z82LkwaXC98Lk33bPedR13q5WKBSjTu3zBmdD5RjGv5WZvdi25fUmFzK1NaF9CZV7xfKEun",
      did: 'did:key:z82LkwaXC98Lk33bPedR13q5WKBSjTu3zBmdD5RjGv5WZvdi25fUmFzK1NaF9CZV7xfKEun',
      method: "key",
      didUrl: 'did:key:z82LkwaXC98Lk33bPedR13q5WKBSjTu3zBmdD5RjGv5WZvdi25fUmFzK1NaF9CZV7xfKEun/some/path',
      path: '/some/path'
}

let doc = await resolve('did:key:z82LkwaXC98Lk33bPedR13q5WKBSjTu3zBmdD5RjGv5WZvdi25fUmFzK1NaF9CZV7xfKEun', parsedDid, {}, { accept: 'application/did+ld+json' })

console.log(doc)

console.log(doc.didDocument.verificationMethod);
