const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Tipo de lenguaje:" + repo.language)
   console.log("Numero de Commits:" + repo.numberOfCommits)
   console.log("Numero de Estrellas:" + repo.stars)
   console.log("Numero de Forks:" + repo.forks)
   console.log("Issues abiertos:" + repo.issues_open)
   console.log("Issues cerrados:" + repo.issues_close)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   