class AlunosService{
    constructor(){
        this.alunos = []
        this.updateListAlunosFromLocalStorage();
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno must be an instance of AlunoModel")
        }
        this.alunos.push(aluno)
        this.updateLocalStorage();
    }

    edit(aluno){
        aluno.generateAvarege();
        this.updateLocalStorage();
    }

    searchById(id){
        return this.alunos.find(aluno => aluno._id === id)
    }

    updateLocalStorage(){
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    updateListAlunosFromLocalStorage(){
        const local = localStorage.getItem('alunos')
        if(local){
            JSON.parse(local).forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }

    search(data){
        return this.alunos.filter(aluno => aluno.nome.indexOf(data) >= 0)
    }
}