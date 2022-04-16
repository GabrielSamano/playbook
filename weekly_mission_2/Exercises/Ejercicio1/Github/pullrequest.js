const pullrequest ={
    title: "Blog",
    branchName: "Main",
    dateCreated: "14/04/2022",
    status_pull: "ok",
    repositoryAsociated: "LaunchX",

    getStatus: function(){
        return this.status_pull + "its ok"
    },

    getTitleandAuthor: function(){
        return this.title + "Carlo"
    }


}

console.log("The pull request is: " + pullrequest.title)
console.log("The name of this branch is: " + pullrequest.branchName)
console.log("the date of created this was: " + pullrequest.dateCreated)
console.log("The status of this pullrequest is: " + pullrequest.status_pull)
console.log(pullrequest.getStatus())
console.log(pullrequest.getTitleandAuthor())


