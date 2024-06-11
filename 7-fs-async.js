const { readFile, writeFile } = require("fs")

console.log("start")
readFile("./content/first.txt", "utf8", (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile("./content/result-async.txt", `Here is the async result: ${first} ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log("done with the task")
        })
    })
})
console.log("starting the next one")