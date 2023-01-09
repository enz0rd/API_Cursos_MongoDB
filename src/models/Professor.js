import mongoose from "mongoose";

const ProfessorSchema = new mongoose.Schema(
    {
        id: {type: String},
        cpf: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: String, required: true},
        curso: {type: String},
    }
);

const professores = mongoose.model('professores', ProfessorSchema)

export default professores