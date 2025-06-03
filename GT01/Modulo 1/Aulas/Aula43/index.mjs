import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { Sequelize,DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    process.env.DB_database,
    process.env.DB_user,
    process.env.DB_password,{
        host:process.env.DB_host,
        dialect:process.env.DB_DIALECT
    }
)

try{
    await sequelize.authenticate()
    console.log('Banco conectado com sucesso!');
} catch(e){
    console.log(e);
}







const app = express()
const Porta = process.env.DB_Porta

dotenv.config()
app.use(express.json())

function conectarBanco(){
    const conexao = mysql.createConnection({
        host:process.env.DB_host,
        user:process.env.DB_user,
        password:process.env.DB_password,
        database:process.env.DB_database
    })
    console.log('Banco conectado com sucesso!');
    
    return conexao
}

conectarBanco()


app.get('/', (req,res) => {
    return res.send('<h1>API inicial</h1>')
})

app.get('/todosUsuarios', (req,res) => {
    const conexao = conectarBanco()
    let sql = `select nome,tipo from usuarios`
    conexao.query(sql,(e,result) => {
        if (e) {
            console.log(`Deu erro: ${e}`);
        } else{
            conexao.end()
            return res.json(result)
        }
        conexao.end()
    })
})

app.get('/todosAlunos/:id', (req,res) => {
    const conexao = conectarBanco()
    let id = req.params.id
    let sql = `select nome,tipo from usuarios where tipo = 'aluno' and id = ${id}`
    conexao.query(sql,(e,result) => {
        if (e) {
            console.log(`Deu erro: ${e}`);
        } else{
            conexao.end()
            return res.json(result)
        }
        conexao.end()
    })
})



app.post('/cadastrarUsuario', async (req,res) => {
    const conexao = conectarBanco()
    let novoUsuario = req.body

    novoUsuario.senha = await bcrypt.hash(novoUsuario.senha,10)

    let sql = `insert into usuarios (username,senha,nome,ativo,tipo) values ('${novoUsuario.username}','${novoUsuario.senha}','${novoUsuario.nome}','${novoUsuario.ativo}','${novoUsuario.tipo}')`

    conexao.query(sql,(e,result) => {
        if (e) {
            console.log(e);
            
        } else {
            console.log(novoUsuario);
            
            res.status(200)
            return res.send(`Usuario ${novoUsuario.nome} foi cadastrado com sucesso`) 
        }
    })
})


app.listen(Porta, () => {
    console.log(`Servidor está online na porta: ${Porta}`);
    console.log(`Link do servidor: http://localhost:${Porta}`);
    
})
