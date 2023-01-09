import mongoose from "mongoose";

const CursoSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        professor: {type: mongoose.Schema.Types.ObjectId, ref: 'professores', required: true},
        alunos: {type: Number}
    }
);

const cursos = mongoose.model('cursos', CursoSchema)

export default cursos