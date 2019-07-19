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
    },
    setAuthenticated(authenticated){
       return {
           type: "SET_USER",
           payload: {
            authenticated: authenticated
           }
       } 
    }
}