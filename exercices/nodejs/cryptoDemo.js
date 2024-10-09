import crypto from 'crypto';

// Hash
const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log('Hash: ' + hash.digest('hex'));

// Random seq.
crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log('Rnd seq: ' + buffer.toString('hex'));
})

// Ciphers
const algo = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // init vector

const cipher = crypto.createCipheriv(algo, key, iv);
let encryped = cipher.update('Hello, World!', 'utf-8', 'hex');
encryped += cipher.final('hex');
console.log('Encrypted: ' + encryped);

const decipher = crypto.createDecipheriv(algo, key, iv);
let decrypted = decipher.update(encryped, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log('Decrypted: ' + decrypted);