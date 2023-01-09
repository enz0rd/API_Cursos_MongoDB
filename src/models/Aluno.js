import mongoose from "mongoose";

const AlunoSchema = new mongoose.Schema(
    {
        id: {type: String},
        matricula: {type: Number, required: true},
        cpf: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: String, required: true},
        curso: {type: mongoose.Schema.Types.ObjectId, ref: 'cursos'},
        turno: {type: String, required: true}
    }
);

const alunos = mongoose.model('alunos', AlunoSchema)

export default alunos