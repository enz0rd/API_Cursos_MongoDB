import cursos from '../models/Curso.js'

class CursoController {

    static listarCursos = (req, res) => {
        cursos.find()
            .populate('professor')
            .exec((err, cursos) => {
            res.status(200).json(cursos)
        })
    }

    static cursoID = (req, res) => {
        cursos.findById(req.params.id)
        .populate('professor', 'name')
        .exec((err, cursos) => {
            if(!err) {
                res.status(200).json(cursos)
            } else {
                res.status(400).send({message: `${err.message} - Curso não encontrado`})
            }
        })
    }

    static addCurso = (req,res) => {
        let curso = new cursos(req.body)
        curso.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Curso`})
            } else {
                res.status(201).send(curso.toJSON())
            }
        })
    }

    static attCurso = (req,res) => {
        const id = req.params.id;
        cursos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Curso atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static delCurso = (req,res) => {
        const id = req.params.id
        cursos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Curso removido com sucesso!`})
            } else {
                res.status(500).send({message: `${err.message} - Não foi possível remover curso!`})
            }
        })
    }

    static cursoPorProfessor = (req,res) => {
        const prof = req.query.professor
        cursos.find({'professor': prof}, {}, (err, cursos) => {
            if(!err) {
                res.status(200).send(cursos)
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default CursoController