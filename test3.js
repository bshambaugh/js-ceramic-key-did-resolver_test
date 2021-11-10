import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-multibase+multicodecTest2/compressKey/js-ceramic/packages/key-did-resolver/lib/index.js';
// import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-ceramic/packages/key-did-resolver/lib/index.js';

    let parsedDid = {
      id: "z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
      did: 'did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp',
      method: "key",
      didUrl: 'did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp/some/path',
      path: '/some/path'
    }

console.log(keyDIDResolver);

const resolverRegistry = keyDIDResolver.default.default.getResolver();

console.log(resolverRegistry);

const resolve = resolverRegistry.key

console.log(resolve)

let doc = await resolve('did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp', parsedDid, {}, { accept: 'application/did+ld+json' })

console.log(doc)

var keys = Object.keys(doc);

console.log(keys);

console.log(doc.didDocument)

var keys2 = Object.keys(doc.didDocument)

console.log(keys2)

console.log(doc.didDocument.verificationMethod)
