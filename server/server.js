require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 3001

const notes = require("./notes")

const app = express()

app.use(express.static("public"))
app.use(cors())


app.get("/", (req, res) => {
  const help = `
  <pre>See README.md for API details</pre>
  `
  res.send(help)
})



app.get("/notes", (req, res) => {
    notes.getAll(req.token)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                 error: "There was an error."
          })
        }
      )
})

app.post("/notes", bodyParser.json(), (req, res) => {
    notes.add(req.body)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                 error: "There was an error."
          })
        }
      )
})

app.get("/notes/:id", (req, res) => {
    notes.get(req.params.id)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                  error: "There was an error."
              })
          }
      )
})

app.delete("/notes/:id", (req, res) => {
    notes.remove(req.params.id)
      .then(
          (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                  error: "There was an error."
              })
          }
      )
})

app.put("/notes/:id", bodyParser.json(), (req, res) => {
    notes.edit(req.params.id, req.body)
      .then(
        (data) => res.send(data),
          (error) => {
              console.error(error)
              res.status(500).send({
                  error: "There was an error."
              })
          }
      )
})


app.listen(port, () => {
  console.log("Server listening on port %s", port)
})
