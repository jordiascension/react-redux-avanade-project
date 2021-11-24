export const GET_NOTES = "GET_NOTES"
export const GET_NOTE = "GET_NOTE"
export const ADD_NOTE = "ADD_NOTE"
export const UPDATE_NOTE = "UPDATE_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"


export function getNotes () {
    return {
      type: GET_NOTES
    }
  }

export function getNote ( id ) {
  return {
    type: GET_NOTE,
    id
  }
}

export function addNote ( note ) {
  return {
    type: ADD_NOTE,
    note
  }
}

export function updateNote ( note ) {
  return {
    type: UPDATE_NOTE,
    note
  }
}

export function deleteNote ( id ) {
  return {
    type: DELETE_NOTE,
    id
  }
}
