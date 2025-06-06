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



const app = express()
const Porta = 3000

app.use(cors())
app.use(express.json())




app.get('/usuarios', (req,res) => {
    let sql = 'Select * from usuarios'
    conexao.query(sql, (er,result) => {
        try {
            return res.json(result)
        } catch (error) {
            console.log(`deu erro olha: ${error,er}`);
        }
    })
})

app.get('/usuarios/:id', (req,res) => {
    let id = req.params.id
    let sql = `Select * from usuarios where id = ${id}`

    conexao.query(sql,(er,result) => {
         try {
            return res.json(result)
        } catch (error) {
            console.log(`deu erro olha: ${error,er}`);
        }
    })
})

app.post('/cadastrarUsuario', (req,res) => {
    let novoUsuario = req.body
    let sql = `insert into usuarios (username,senha,nome,tipo,ativo) values ('${novoUsuario.username}','${novoUsuario.senha}','${novoUsuario.nome}','${novoUsuario.tipo}','${novoUsuario.ativo}')`

    conexao.query(sql,(erro,results) => {
        try {
            return res.send('Usuario cadastrado')
        } catch (error) {
            console.log(error);
            console.log(erro); 
        }
    })
})


app.listen(Porta, () => {
    console.log(`Servidor rodando na porta: ${Porta}`);
    
})
