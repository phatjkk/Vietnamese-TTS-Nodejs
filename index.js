var request = require("request");
var mammoth = require("mammoth");
// mammoth.extractRawText({path: "Wingman.docx"})
//     .then(function(result){
//         var text = result.value; // The raw text
//         var messages = result.messages;
//         console.log(text);
//     })
//     .done();
// const https = require("https"); // or 'https' for https:// URLs
// const fs = require("fs");
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// function getSpeak(
//   text,
//   encode_type = 1,
//   speakerId = 4,
//   apiKey = "9YX4lUKZXTV3a9EJ0suhFDzVNaaN6ODq"
// ) {
//   return new Promise(function (res, rej) {
//     request(
//       {
//         method: "POST",
//         url: `https://api.zalo.ai/v1/tts/synthesize?apikey=${apiKey}`,
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         form: {
//           input: text,
//           speaker_id: speakerId,
//           encode_type: encode_type,
//         },
//       },
//       function (err, response) {
//         if (err) {
//           rej(err);
//         } else {
//           res(response);
//         }
//       }
//     );
//   });
// }