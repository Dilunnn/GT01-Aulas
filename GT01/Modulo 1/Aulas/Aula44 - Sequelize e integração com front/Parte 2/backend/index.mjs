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


const app = express()
const Porta = 3000

app.use(cors())
app.use(express.json())


let users = [
    {
        id:1,
        nome:'Maria',
        email:'Maria@gmail.com'
    },
    {
        id:2,
        nome:'Jão',
        email:'Jão@gmail.com'
    },
    {
        id:3,
        nome:'Rodrigo',
        email:'Rodrigo@gmail.com'
    }
]

app.get('/usuarios', (req,res) => {
    return res.json(users)
})

app.listen(Porta, () => {
    console.log(`Servidor rodando na porta: ${Porta}`);
    
})