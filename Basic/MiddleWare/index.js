const express = require ("express");
// const req = require("express/lib/request");
const errorHandler = require("./middle/errorHandler")
app = express()

// const auth = require("./middle/auth");
// const logger = require("./middle/logger");

// app.use(auth)

// app.use((req, res, next) => {
//     console.log("middleware")
//     // res.send("middleware");
//     next()
// })

// app.use(express.static("public"))

// app.use(express.urlencoded({extended:false}))
// app.use(express.json())


// app.use((req, res, next) => {
//     logger(`${req.method}\t${req.url}`, `log.txt`)
//     next()
// })

// app.get(`/`, auth, (req, res) => {

//     res.send("page is rendering")
// })

// app.get(`/users`, (req, res) => {

//     res.send("userspage is rendering")
// })

//CORS
const dors = require ("cors");

app.use(cors());

app.get(`/`, (req, res) => {

    res.send("CORS samples")

})

app.get(`/test/:id`, (req, res, next) => {

    if(req.params.id == 1){
        next({
            errorMessage : "Hata"
        })
    }    
})


app.use(errorHandler);

app.listen(3000, () => console.log("Running..."))