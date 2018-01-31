var express = require('express');
var path = require('path')
const app = express();
var router = express.Router();
const RateLimit = require('express-rate-limit')
const views = app.get('views')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(views,"form.html"))
});

router.get('/get',(req, res, next) => {
forEach(val => {})
  console.log(req.headers)
  res.send(req.headers)
})

router.post('/post',(req, res, next) => {
  console.log(req.headers)
    res.send(req.headers)
})

router.get('/lina',(req, res, next) => {
  res.download(path.join(__dirname,'fengzelina.jpg'))
})
var createAccountLimiter = new RateLimit({
    windowMs: 1*60*1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message: "停下来，少侠快停下你的手速！"
});

router.get('/tooMany',createAccountLimiter,(req, res, next) => {
    res.sendFile(path.join(views,"toomany.html"))
})




module.exports = router;
