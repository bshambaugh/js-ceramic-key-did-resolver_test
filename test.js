import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-multibase+multicodecTest2/compressKey/js-ceramic/packages/key-did-resolver/lib/index.js';
//import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-ceramic/packages/key-did-resolver/lib/index.js';

    let parsedDid = {
      id: "zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ",
      did: 'did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ',
      method: "key",
      didUrl: 'did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ/some/path',
      path: '/some/path'
    }

console.log(keyDIDResolver);

const resolverRegistry = keyDIDResolver.default.default.getResolver();

console.log(resolverRegistry);

const resolve = resolverRegistry.key

console.log(resolve)

let doc = await resolve('did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ', parsedDid, {}, { accept: 'application/did+ld+json' })

console.log(doc)

var keys = Object.keys(doc);

console.log(keys);

console.log(doc.didDocument)

var keys2 = Object.keys(doc.didDocument)

console.log(keys2)

console.log(doc.didDocument.verificationMethod)
