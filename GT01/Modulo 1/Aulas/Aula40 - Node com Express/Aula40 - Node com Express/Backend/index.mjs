import express from 'express'

const app = express()
const porta = 3000

let usuarios = [
    {id:'1',nome:'Maria',ativo:true},
    {id:'2',nome:'João',ativo:true},
    {id:'3',nome:'Pedro',ativo:false},
]

app.get('/',(req,res) => {
    res.send('<h1>Olá mundo!!</h1>')
})

app.get('/usuarios', (req,res) => {
    res.json(usuarios)
})

app.post('/usuarios', (rep,res) => {
    let novoUsuario = rep.body
    console.log(novoUsuario);
    res.send('Usuario recebido')
})

app.get('/usuarios/:id',(req,res) => {
    let id = req.params.id
    for(let i = 0; i < usuarios.length;i++) {
        if (id == usuarios[i].id) {
            res.json(usuarios[i])
        }
    }
    res.send('Usuario não encontrado')
})





app.listen(porta,() => (
    console.log(`O servidor está rodando na porta: ${porta}`)    
))