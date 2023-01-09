import professores from '../models/Professor.js'

class ProfessorController {

    static listarProfessores = (req, res) => {
        professores.find((err, prof) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Não foi possível listar professores`})
            } else {
                res.status(200).json(prof)
            }
        })
    }

    static ProfessorID = (req, res) => {
        professores.findById(req.params.id, (err, prof) => {
            if(!err) {
                res.status(200).json(prof)
            } else {
                res.status(400).send({message: `${err.message} - Professor não encontrado`})
            }
        })
    }

    static addProfessor = (req,res) => {
        let professor = new professores(req.body)
        professor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar professor`})
            } else {
                res.status(201).send(professor.toJSON())
            }
        })
    }

    static attProfessor = (req,res) => {
        const id = req.params.id;
        professores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Professor atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static delProfessor = (req,res) => {
        const id = req.params.id
        professores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Professor removido com sucesso!`})
            } else {
                res.status(500).send({message: `${err.message} - Não foi possível remover Professor!`})
            }
        })
    }
}

export default ProfessorController