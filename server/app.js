var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const admin = require('firebase-admin')

const serviceAccount = require("./config/fbServiceAccountKey.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function checkAuth(req, res, next) {
  if (req.headers.token) {
    admin.auth().verifyIdToken(req.headers.token)
      .then(() => {
        next()
      }).catch(() => {
        res.status(403).send('Unauthorized')
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}

app.use('/', checkAuth)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

module.exports = app;
