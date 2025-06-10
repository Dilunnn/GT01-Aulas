/*
criar o arquivo index.mjs
criar o arquivo .env
criar o arquivo .gitignore
npm install express
npm install mysql2
npm install --save-dev nodemon
npm install dotenv
npm install bcrypt
npm install cors
npm init -y
editar o package.json:
"start":"node index.mjs",
"dev": "nodemon index.mjs"
*/
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express()
app.use(cors())
app.use(express.json())

const porta = 3000

// Conexão com o MySql
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'sistema_gestao_escolar'
})

// Rotas com banco de dados
conexao.connect((erro) => {
    if(erro){
        console.log(`Erro ao conectar com o banco: ${erro}`)
    }else{
        console.log('Banco conectado com sucesso!')
    }
})

app.get('/',(req,res) => {
    res.send('Servidor rodando')
})

app.post('/verificarlogin', (req,res) => {
    let usuario = req.body
    let sql = `SELECT * FROM usuarios WHERE email = '${usuario.email}' and senha = '${usuario.senha}'`
    conexao.query(sql,(er,result) => {
        if (er) {
            console.log(er);
            return res.status(500).json({erro: 'Erro no servidor'})
        }
        if(result.length > 0){
            result = result[0]
            console.log(result); 
        }
    })
    
})


app.listen(porta, ()=>{
    console.log(`O servidor está rodando na porta ${porta}`)
})