import { GET_NOTES, GET_NOTE,
    ADD_NOTE, UPDATE_NOTE, DELETE_NOTE  } from "../actions"

let initialNotes = [
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
];

let reducer = (state = initialNotes, action) => {
    switch (action.type) {
        case GET_NOTES:         
          return state;
        
        case GET_NOTE:
          console.log("get note: ", action.id)
          return state.filter(n => n.id === action.id);
        
        case ADD_NOTE:
          action.note.id = action.note.id || uniqueId();
          console.log("add note: ", action.note, state)
           state.push(action.note);
           console.log("after push note: ", action.note, state)
          return state;
        
          case UPDATE_NOTE:
          console.log("update notes: ", action.note)
          return  state.map( (note) => {                  
                if(note.id !== action.note.id) {
                    return note;
                } 
                return action.note;    
            })
          
       
          case DELETE_NOTE:
          console.log("delete note: ", action.id)
          return state.filter(n => n.id !== action.id);
          
          default:
          return state;
  }
};

  // I made this to create Ids similar to those in the backend
  export const uniqueId =  function () {
    let chars = "abcdefghijklnmopqrstuvwxyz0123456789";
    return "xxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, function(c) {
      return chars.charAt(Math.random() * 37);
    });
  }

export default reducer;
