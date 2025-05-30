import express from 'express'
import mysql from 'mysql2'

const app = express()
const porta = 3000

app.use(express.json())


app.get('/', (req,res) => {
    res.send('Olá mundo ')
})


// Conexão com o Mysql
const conexao = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'1234',
    database:'escola'
})

// Rotas com banco de dados

conexao.connect((erro) => {
    if (erro) {
        console.log(`Erro ao conectar com o banco: ${erro}`);
    } else {
        console.log('Banco conectado com sucesso!');
        
    }
})

app.get('/usuariosEscola', (req,res) => {
    let sql = 'select * from usuarios'
    conexao.query(sql, (erro,resultado) => {
        if (erro) {
            console.log(`Erro ao realizar a consulta: ${erro}`);
            return res.send(erro)
        } else {
            console.log(resultado);
            return res.send(resultado)
            
        }
    })
})


let usuarios = [
    {id:'1',nome:'Maria',ativo:true},
    {id:'2',nome:'João',ativo:true},
    {id:'3',nome:'Pedro',ativo:false},
]

app.get('/usuarios',(req,res) => {
    res.json(usuarios)
})


app.get('/usuarios/:id',(req,res) => {
    let id = req.params.id
    for(let usuario of usuarios){
        if (usuario.id == id){
            return res.json(usuario)
        }
    }
    return res.send('Usuario não encontrado')
})

app.put('/atualizarNome/:id', (req,res) => {
        let id = req.params.id
        let atualizacao = req.body
        for(let usuario of usuarios){
        if (usuario.id == id){
            usuario.nome = atualizacao.nome
            return res.json(usuarios)
        }
    } 
    return res.send('Usuário não encontrado!')
})

app.post('/cadastrar', (req,res) => {
    let novoUsuario = req.body
    console.log(novoUsuario);

    res.send('Usuario cadastrado com sucesso')
    
    usuarios.push(novoUsuario)
})

app.delete('/deletarUsuario/:id', (req,res) => {
    let id = req.params.id
    for(let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            usuarios.splice(i,1)
            return res.json(usuarios)
        }
    }
    
})




app.listen(porta,() => {
    console.log(`Servidor rodando na porta ${porta}`);
    
})