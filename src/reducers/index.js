import { GET_STUDENTS, GET_STUDENT,
    ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT  } from "../actions"

let initialStudents = [
    {
        id: "8xf0y6ziyjabvozdd253nd",
        name: "Pepe",
        surname: "Soto",
        age: 28,
      },
       {
        id: "6ni6ok3ym7mf1p33lnez",
        name: "Francisco",
        surname: "Albiol",
        age: 18,
      }
];

let reducer = (state = initialStudents, action) => {
    switch (action.type) {
        case GET_STUDENTS:         
          return state;
        
        case GET_STUDENT:
          console.log("get student: ", action.id)
          return state.filter(n => n.id === action.id);
        
        case ADD_STUDENT:
          action.student.id = action.student.id || uniqueId();
          console.log("add student: ", action.student, state)
           state.push(action.student);
           console.log("after push student: ", action.student, state)
          return state;
        
          case UPDATE_STUDENT:
          console.log("update student: ", action.student)
          return  state.map( (student) => {                  
                if(student.id !== action.student.id) {
                    return student;
                } 
                return action.student;    
            })
          
       
          case DELETE_STUDENT:
          console.log("delete student: ", action.id)
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
