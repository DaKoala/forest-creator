# Forest Creator
A Twitter Bot creating a random string containing Emoji about wild animals and plants and twitting the "forest" every minute.

Demo: [My Own Bot](https://twitter.com/BillyZou3)

## Dependencies
* `Twit`

## Installation
Install dependencies:

```bash
npm install
```

Create a `config.js` in the root directory and add the following code to it. Replace the empty strings with keys in your own Twitter Developer Account.

```js
module.exports = {
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
};
```

Run the Twitter bot:

```bash
npm run twit
```

If you want to test and develop the bot by yourself, you can globally install `Nodemon` and run the following command:

```bash
npm run dev
```

