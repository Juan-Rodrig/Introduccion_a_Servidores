
const express = require('express');

const path = require('path')

const app = express();

app.listen(3030, () => {
    console.log("servidor corriendo");
})

////////// UBICACION \\\\\\\\\\\\\\\\

let htmlPath1 = path.resolve(__dirname,'./views/index.html')
let htmlPath2 = path.resolve(__dirname,'./views/babbage.html')
let htmlPath3 = path.resolve(__dirname,'./views/berners-lee.html')
let htmlPath4 = path.resolve(__dirname,'./views/clarke.html')
let htmlPath5 = path.resolve(__dirname,'./views/hamilton.html')
let htmlPath6 = path.resolve(__dirname,'./views/hopper.html')
let htmlPath7 = path.resolve(__dirname,'./views/lovelace.html')
let htmlPath8 = path.resolve(__dirname,'./views/turing.html')


app.get('/',function (req, res) {
    res.sendFile(htmlPath1);})

app.get('/babbage', (req, res)=>{
    res.sendFile(htmlPath2)})

app.get('/berners-lee', (req, res)=>{
    res.sendFile(htmlPath3)})

app.get('/clarke', (req, res)=>{
    res.sendFile(htmlPath4)})

app.get('/hamilton', (req, res)=>{
    res.sendFile(htmlPath5)})

app.get('/hopper', (req, res)=>{
    res.sendFile(htmlPath6)})

app.get('/lovelace', (req, res)=>{
    res.sendFile(htmlPath7)})

app.get('/turing', (req, res)=>{
    res.sendFile(htmlPath8)});

app.use(express.static('public'))


