module.exports = {
    setRegistro(variable, valor){
       return {
           type: "SET_REGISTER",
           payload: {
               variable: variable,
               valor: valor
           }
       } 
    },
    setInitials(variable, valor){
       return {
           type: "SET_INITIALS",
           payload: {
               variable: variable,
               valor: valor
           }
       } 
    }
}