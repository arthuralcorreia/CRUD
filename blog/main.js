const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const Post = require('./models/posts')

// config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
//rotas
    app.get('/', function(req, res){
        Post.findAll({order:[['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Esta postagem não existe")
        })
    })

/* esta linha de código deve ser a ultima a ser escrita dentro da aplicação principal
Selecione a porta */
app.listen(8081, function(){
    console.log("RODANDO NORMALMENTE NA URL http://localhost:8081")
})
