import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://root:projetonode@dbprojeto.aivfnpa.mongodb.net/dbCursos')

let db = mongoose.connection

export default db