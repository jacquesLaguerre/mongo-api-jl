import express from 'express'

const PORT = 3030
const app = express()
app.use(express.json())
app.get('/', (req,res)=> res.send('working'))


app.listen(PORT, ()=> console.log(`listening on http://localhost${PORT}...`))