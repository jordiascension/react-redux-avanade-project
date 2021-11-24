const clone = require("clone")


let notes = [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1467166872634,
    content: "This is an example",
  },
   {
    id: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468479767190,
    content: "This thing works",
  }
]


function get (id) {
  return new Promise((res) => {
    const note = notes.filter( n => n.id === id)
    res(notes[0])
  })
}

function getAll () {
  return new Promise((res) => {
    res(notes)
  })
}

function add (note) {
  return new Promise((res) => {
    notes.push(note)
    res(note)
  })
}

function remove (id) {
    return new Promise((res) => {
      const notes = notes.filter( n => n.id !== id)
      res(id)
    })
}

function edit (id, note) {
    return new Promise((res) => {
        let articles = getData(token)
        for (prop in article) {
            articles[id][prop] = article[prop]
        }
        res(articles[id])
    })
}

module.exports = {
  get,
  getAll,
  add,
  remove,
  edit
}