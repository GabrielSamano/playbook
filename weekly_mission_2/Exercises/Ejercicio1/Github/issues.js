const issue = {
    title:"Semana2",
    repositoryNameAsociated:"NodeJs",
    status:"ok",
    comments:"20",
    labels:"3",
    author:"carlo",
    datecreated:"12/04/2022",
    lastupdate:"12/04/2022",
    getTitleandAuthor: function(){
        return this.title + this.author
    },
    getGeneralinfo: function(){
        return `This issue ${this.title} was created by ${this.author}`

    }


}

console.log("Titulo del Issue:" + issue.title)
console.log("Asociado al repositorio de:" +issue.repositoryNameAsociated)
console.log("Estado en el que se encuentra:" +issue.status)
console.log("Numero de comentarios:" + issue.comments)
console.log("Numero de Etiquetas:" + issue.labels)
console.log("Fecha de creacion:" + issue.datecreated)
console.log("Ultima modificacion:" + issue.lastupdate)
console.log(issue.getTitleandAuthor())
console.log(issue.getGeneralinfo())
