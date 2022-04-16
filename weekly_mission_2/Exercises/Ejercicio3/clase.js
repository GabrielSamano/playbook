class Reposi {

    constructor(name, author, language, Subjects){
        this.name = name
        this.author = author
        this.language = language
        this.Subjects = Subjects

    }
}

const gabrielRepo = new Reposi("Gabriel", "Carlo", "JavaScript", ["199 Stars", "299 Forks", "100 Commits"])
console.log("Ejercicio de clases con la informacion del ejercicio 1.")
console.log(gabrielRepo)
