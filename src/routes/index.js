import Express from 'express'
import cursos from "./CursosRoutes.js"
import alunos from "./CursosRoutes.js"
import professores from "./CursosRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "Bem vindo!"})
    })

    app.use(
        Express.json(),
        cursos,
        alunos,
        professores
    )
}

export default routes