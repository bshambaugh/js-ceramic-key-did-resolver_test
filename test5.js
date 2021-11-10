//import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-ceramic/packages/key-did-resolver/lib/index.js';

import * as keyDIDResolver from '/home/ubuntu/Documents/exploringCIDs/js-multibase+multicodecTest2/compressKey/js-ceramic/packages/key-did-resolver/lib/index.js';

 let parsedDid = {
      id: "zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z",
      did: 'did:key:zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z',
      method: "key",
      didUrl: 'did:key:zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z/some/path',
      path: '/some/path'
    }

 let parsedDidTwo = {
      id: null,
      did: null,
      method: "key",
      didUrl: null,
      path: '/some/path'
    }

    let parsedDidThree = {
      id: undefined,
      did: undefined,
      method: "key",
      didUrl: undefined,
      path: '/some/path'
    }

   let parsedDidFour = {
      id: "z4oJ8jteuaRyApGghF56sp5r3UJcd3pZTFjDyiGVnXSyDx4mX8ttGaryvEZtoX9ceq2okTCkT78iqopJ3pENPopjRyQfx",
      did: 'did:key:z4oJ8jteuaRyApGghF56sp5r3UJcd3pZTFjDyiGVnXSyDx4mX8ttGaryvEZtoX9ceq2okTCkT78iqopJ3pENPopjRyQfx',
      method: "key",
      didUrl: 'did:key:z4oJ8jteuaRyApGghF56sp5r3UJcd3pZTFjDyiGVnXSyDx4mX8ttGaryvEZtoX9ceq2okTCkT78iqopJ3pENPopjRyQfx',
      path: '/some/path'
    }

    let parsedDidFive = {
      id: "zDnafavtX4aGaPU874LoTxKZWUo6Nb8omrqMKWgq6v9MowRqf",
      did: 'did:key:zDnafavtX4aGaPU874LoTxKZWUo6Nb8omrqMKWgq6v9MowRqf',
      method: "key",
      didUrl: 'did:key:zDnafavtX4aGaPU874LoTxKZWUo6Nb8omrqMKWgq6v9MowRqf',
      path: '/some/path'
    }


    let parsedDidSix = {
      id: "zDnafHha9ZnWybRPLVG23j9PDHaHrLeAT7dHE2dsn4Dw3RUbP",
      did: 'did:key:zDnafHha9ZnWybRPLVG23j9PDHaHrLeAT7dHE2dsn4Dw3RUbP',
      method: "key",
      didUrl: 'did:key:zDnafHha9ZnWybRPLVG23j9PDHaHrLeAT7dHE2dsn4Dw3RUbP',
      path: '/some/path'
    }

    let parsedDidSeven = {
      id: "zHmLdZtegfTh1WewAzVucwKoWKgdUGBQW37CG5ByCDe2rQCiJXLkPcUB33t56vsmCFbZNuyZTU2P7Pkm32Qf1eHfsH6NX8",
      did: 'did:key:zHmLdZtegfTh1WewAzVucwKoWKgdUGBQW37CG5ByCDe2rQCiJXLkPcUB33t56vsmCFbZNuyZTU2P7Pkm32Qf1eHfsH6NX8',
      method: "key",
      didUrl: 'did:key:zHmLdZtegfTh1WewAzVucwKoWKgdUGBQW37CG5ByCDe2rQCiJXLkPcUB33t56vsmCFbZNuyZTU2P7Pkm32Qf1eHfsH6NX8',
      path: '/some/path'
    }

    let parsedDidEight = {
      id: "zHmLcmiiPUkSNtye5ippJbGYB4Aiwm7DWYLUqvh1Lca4NdYqvVL381QKGVNYHa25mJbRKcQ7RBEyPaznu6EpA2uAGVHg3x",
      did: 'did:key:zHmLcmiiPUkSNtye5ippJbGYB4Aiwm7DWYLUqvh1Lca4NdYqvVL381QKGVNYHa25mJbRKcQ7RBEyPaznu6EpA2uAGVHg3x',
      method: "key",
      didUrl: 'did:key:zHmLcmiiPUkSNtye5ippJbGYB4Aiwm7DWYLUqvh1Lca4NdYqvVL381QKGVNYHa25mJbRKcQ7RBEyPaznu6EpA2uAGVHg3x',
      path: '/some/path'
    }

    let parsedDidNine = {
      id: "zySBWPaU16W5WEbZe8945kbtT1vThgcTmEfxjYPdxTsdkAbY1f",
      did: 'did:key:zySBWPaU16W5WEbZe8945kbtT1vThgcTmEfxjYPdxTsdkAbY1f',
      method: "key",
      didUrl: 'did:key:zySBWPaU16W5WEbZe8945kbtT1vThgcTmEfxjYPdxTsdkAbY1f',
      path: '/some/path'
    }

console.log(keyDIDResolver);

const resolverRegistry = keyDIDResolver.default.default.getResolver();

console.log('key did resolver object');
console.log(keyDIDResolver);

console.log(resolverRegistry);

const resolve = resolverRegistry.key

console.log(resolve)

let doc = await resolve('did:key:zrurwcJZss4ruepVNu1H3xmSirvNbzgBk9qrCktB6kaewXnJAhYWwtP3bxACqBpzjZdN7TyHNzzGGSSH5qvZsSDir9z', parsedDid, {}, { accept: 'application/did+ld+json' })

console.log(doc)

var keys = Object.keys(doc);

console.log(keys);

console.log(doc.didDocument)

var keys2 = Object.keys(doc.didDocument)

console.log(keys2)

console.log(doc.didDocument.verificationMethod)


console.log('here is docTwo');

let docTwo = await resolve(null, parsedDidTwo, {}, { accept: 'application/did+ld+json' })

console.log(docTwo)

/*
console.log('here are the keys Two');

var keysTwo = Object.keys(docTwo.didDocument)

console.log(keysTwo)

console.log('here is the verification method');

console.log(docTwo.didDocument.verificationMethod)
*/


console.log('here is docThree');

let docThree = await resolve(undefined, parsedDidThree, {}, { accept: 'application/did+ld+json' })

console.log(docThree)

/*
console.log('here are the keys Three');

var keysThree = Object.keys(docThree.didDocument)

console.log(keysThree)

console.log('here is the verification method');

console.log(docThree.didDocument.verificationMethod)
*/

let docFour = await resolve('did:key:z4oJ8jteuaRyApGghF56sp5r3UJcd3pZTFjDyiGVnXSyDx4mX8ttGaryvEZtoX9ceq2okTCkT78iqopJ3pENPopjRyQfx', parsedDidFour, {}, { accept: 'application/did+ld+json' })

console.log(docFour);

let docFive = await resolve('did:key:zDnafavtX4aGaPU874LoTxKZWUo6Nb8omrqMKWgq6v9MowRqf', parsedDidFive, {}, { accept: 'application/did+ld+json' })

console.log(docFive);

let docSix = await resolve('did:key:zDnafHha9ZnWybRPLVG23j9PDHaHrLeAT7dHE2dsn4Dw3RUbP', parsedDidSix, {}, { accept: 'application/did+ld+json' })

console.log(docSix);

let docSeven = await resolve('did:key:zHmLdZtegfTh1WewAzVucwKoWKgdUGBQW37CG5ByCDe2rQCiJXLkPcUB33t56vsmCFbZNuyZTU2P7Pkm32Qf1eHfsH6NX8', parsedDidSeven, {}, { accept: 'application/did+ld+json' })

console.log(docSeven);

let docEight = await resolve('did:key:zHmLcmiiPUkSNtye5ippJbGYB4Aiwm7DWYLUqvh1Lca4NdYqvVL381QKGVNYHa25mJbRKcQ7RBEyPaznu6EpA2uAGVHg3x', parsedDidEight, {}, { accept: 'application/did+ld+json' })

console.log(docEight);

let docNine = await resolve('did:key:zySBWPaU16W5WEbZe8945kbtT1vThgcTmEfxjYPdxTsdkAbY1f', parsedDidNine, {}, { accept: 'application/did+ld+json' })

console.log(docEight);

