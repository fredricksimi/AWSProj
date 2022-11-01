// Lets use some of the packages we've installed
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const newRouter = require('./router.js');
const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


  app.use(cors({
    origin: "http://ec2-3-87-146-210.compute-1.amazonaws.com:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    credentials: true
  }))

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./ProfilePhotos");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});
const multerFilter = (req, file, cb)=>{
  if (file.mimetype.split('/')[1] != 'pdf'){
    cb(null, true)
  } else{
    cb(new Error('Not a PDF File!!'), false)
  }
}
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});


let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };


app.post('/upload', upload.single('urlpromo'), (req, res) => {
  MongoClient.connect('mongodb://admin:password@mongodb', mongoClientOptions, function (err, client) {
    if (err) throw err;
    let db = client.db('my_users_db');
    let myquery = {
      fullname: req.body.fullname,
      bio: req.body.bio,
      profilePhoto: `${req.file.path}`
    };
    db.collection("users_collection").insertOne(myquery, function (err, result) {
      if(err) throw err;
      response = result;
      client.close();
      res.send(response ? response : {})
    })
  })
});

app.get('/getusers', (req, res) => {
  MongoClient.connect('mongodb://admin:password@mongodb', function(err, db) {
    if (err) throw err;
    var dbo = db.db("my_users_db");
    dbo.collection("users_collection").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result)
      db.close();
    });
  });
})

app.get('/spacedata', (req, res) => {
  axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=5')
                      .then(function (response) {
                          res.json(response.data)
                      })
                      .catch(function (error) {
                          console.log(error);
                      })
})
app.use(express.static('./'))
app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});