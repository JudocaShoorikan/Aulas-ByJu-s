
class Student
{
    constructor(nome, idade, escola, cidade, serie) {
        this.student = {
            nome, 
            idade,
            escola,
            cidade,
            serie,
        }
    }

    show() {
        console.log(this.student.nome, this.student.idade, this.student.escola, this.student.cidade, this.student.serie);
    }
    
}



