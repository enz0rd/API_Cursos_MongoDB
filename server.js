import app from './src/app.js'

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.clear()
    console.log('Servidor rodando em:')
    console.log(`http://localhost:${port}/`)
})