/*
criar o arquivo index.mjs
criar o arquivo .env
criar o arquivo .gitignore
npm install express
npm install mysql2
npm install --save-dev nodemon
npm install dotenv
npm install bcrypt
npm init -y
editar o package.json:
"start":"node index.mjs",
"dev": "nodemon index.mjs"
*/
import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { Sequelize,DataTypes } from 'sequelize'
// utilizar o dotenv
dotenv.config()
// Sequelize
const sequelize = new Sequelize(
    process.env.DB_database,
    process.env.DB_user,
    process.env.DB_password,{
        host:process.env.DB_host,
        dialect:'mysql',
        logging: console.log  // <<< Mostra os SQLs no console
    }
)
async function conectar() {
    try{
    await sequelize.authenticate()
    console.log('Banco Conectado com sucesso!')
}catch(e){
    console.log(e)
}
}

conectar()
// Definição dos modelos



const Usuarios = sequelize.define('Usuarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ativo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    tipo:{
        type: DataTypes.ENUM('admin','aluno','professor')
    }
},{
    timestamps:false
})

const Turmas = sequelize.define('turmas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,
    },
    ano: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false 
})


// Tabela de alunos
const Alunos = sequelize.define('alunos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id:{
        type:DataTypes.INTEGER,
        unique: true,
        references: {model:'Usuarios', key:'id'},
        onDelete: 'CASCADE' /* SET NULL */
    },
    matricula:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    data_nascimento:{
        type: DataTypes.DATEONLY
    },
    turma_id:{
        type:DataTypes.INTEGER,
        references: {model:'Turmas', key:'id'},
        onDelete: 'CASCADE'
    }
},{
    timestamps: false 
})

/*
1. crie as outras 3 tabelas do banco de dados dos alunos pelo sequelize
*/
const Professores = sequelize.define('Professores', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    especialidade:{
        type:DataTypes.STRING
    },
    usuario_id:{
        type:DataTypes.INTEGER,
        references:{model:'Usuarios', key:'id'},
        onDelete:'CASCADE'
    }
})
/*
create table disciplinas (
    id int PRIMARY key AUTO_INCREMENT,
    nome VARCHAR(50),
    professor_id int,
    Foreign Key (professor_id) REFERENCES professores(id) on delete CASCADE
);
*/
const Disciplinas = sequelize.define('Disciplinas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING
    },
    professor_id:{
        type:DataTypes.INTEGER,
        references:{model:'Usuarios_id', key:'id'},
        onDelete:'CASCADE'
    }
})

// Instanciar o express e criar a porta
const app = express()
const porta = process.env.DB_Porta
// Trabalhar com os dados em json
app.use(express.json())

app.get('/', async (req,res) => {
    let turmas = await Alunos.findAll()
    console.log(turmas)
    return res.send(turmas)
})

app.get('/turmas', async (req,res) => {
    let turmas = await Turmas.findAll()
    console.log(turmas);
    return res.send(turmas)
    
})


/*
2. Criar uma rota para mostrar todo o conteúdo de cada tabela
*/




app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})