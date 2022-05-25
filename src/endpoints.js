import {somar, dobro, media, Cores} from './services.js'

import { Router } from "express"; 

const server= Router();

server.get ('/dobro/:numero', (req, resp) => {
    try{
     const numero= req.params.numero;
     const a= dobro(numero);
 
     resp.send({
         dobro:a,
     })
 
    } catch{
        resp.status(404).send({
            erro: err.message
        })
    }
 })
 
 export default server;
 
 server.get('/somar?', (req, resp) => {
    try{
     const numero1= Number (req.query.a);
     const numero2= Number (req.query.b);
 
     const c= somar(numero1 , numero2);
 
     resp.send ({
         soma: c,
     })
    }catch(err){
         resp.status(404).send({
             erro: err.message
         })
     }
 })
 
 
 
 server.post('/somar', (req,resp) => {
     try{
         const {numero1, numero2} = req.body;
     
         const x= somar (numero1, numero2);
 
     resp.send({
         soma: x,
     })
     }catch(err){
         resp.status(404).send({
             erro: err.message
         })
     }
 })
 
 
 
 
 server.get ('/dia2/corprimaria/:cor', (req, resp) => {
     try{
             let cor= req.params.cor;
             let primaria= Cores(cor);
        
         
             resp.send({
             primaria:primaria,
         })
     }catch(err){
         resp.status(404).send({
             erro: err.message
         })
     }
 })
 
 
 
server.get('/temperatura', (req, resp) => {
     try{
         const temp= req.query.temp;
     
     const febre= (temp>=37)
     
     resp.send({
         febre:febre,
     })
     }catch(err){
         resp.status(404).send({
             erro: err.message
         })
     }
 })
 
 
 
 
 server.post ('/media', (req, resp) => {
     try{
         const {nota1, nota2, nota3} = req.body;
   
        const x= media (nota1 , nota2 , nota3);
 
     resp.send({
         media:x,
     })
     }catch(err){
         resp.status(404).send({
             erro: err.message
         })
     }
 })
 
 