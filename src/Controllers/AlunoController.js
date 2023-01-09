import alunos from '../models/Aluno.js'

class AlunoController {

    static listarAlunos = (req, res) => {
        alunos.find()
            .populate('curso')
            .exec((err, alunos) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Não foi possível listar alunos`})
            } else {
                res.status(200).json(alunos)
            }
        })
    }

    static AlunoID = (req, res) => {
        alunos.findById(req.params.id)
            .populate('curso', 'name')
            .exec((err, alunos) => {
            if(!err) {
                res.status(200).json(alunos)
            } else {
                res.status(400).send({message: `${err.message} - Curso não encontrado`})
            }
        })
    }

    static addAluno = (req,res) => {
        let aluno = new alunos(req.body)
        aluno.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar aluno`})
            } else {
                res.status(201).send(aluno.toJSON())
            }
        })
    }

    static attAluno = (req,res) => {
        const id = req.params.id;
        alunos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Aluno atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static delAluno = (req,res) => {
        const id = req.params.id
        alunos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Aluno removido com sucesso!`})
            } else {
                res.status(500).send({message: `${err.message} - Não foi possível remover Aluno!`})
            }
        })
    }
}

export default AlunoController