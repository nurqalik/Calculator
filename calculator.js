const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/bmicalculator', function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', function(req,res){
    var w = parseFloat(req.body.weight)
    var h = parseFloat(req.body.height)
    var n = w / (h*h)
    res.send("Your BMI is "+n)
})

app.post('/', function(req,res){
    var num1 = Number(req.body.first);
    var num2 = Number(req.body.second);
    var result = num1 + num2;
    res.send("The result is "+result)
})

app.listen(3000, function(){
    console.log('server run in port 3000')
})