import Express from 'express'
import CursoController from "../Controllers/CursoController.js";
import ProfessorController from "../Controllers/ProfessorController.js";
import AlunoController from "../Controllers/AlunoController.js";

const router = Express.Router();

router
    .get("/cursos", CursoController.listarCursos)
    .get("/cursos/busca", CursoController.cursoPorProfessor)
    .get("/cursos/:id", CursoController.cursoID)
    .post("/cursos", CursoController.addCurso)
    .put("/cursos/:id", CursoController.attCurso)
    .delete("/cursos/:id", CursoController.delCurso)

    .get("/professores", ProfessorController.listarProfessores)
    .get("/professores/:id", ProfessorController.ProfessorID)
    .post("/professores", ProfessorController.addProfessor)
    .put("/professores/:id", ProfessorController.attProfessor)
    .delete("/professores/:id", ProfessorController.delProfessor)

    .get("/alunos", AlunoController.listarAlunos)
    .get("/alunos/busca", AlunoController.AlunoPorCurso)
    .get("/alunos/:id", AlunoController.AlunoID)
    .post("/alunos", AlunoController.addAluno)
    .put("/alunos/:id", AlunoController.attAluno)
    .delete("/alunos/:id", AlunoController.delAluno)


export default router