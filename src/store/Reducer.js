let Reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_CHAT":
            state.chat = action.payload.chat;
            return {...state}

        case "SET_MESSAGES":
            state.messages = action.payload.messages;
            return {...state}            

        case "ADD_MESSAGE":
            state.messages = [...state.messages, action.payload.message]
            return {...state}            
            
        case "SET_FACEBOOK":
            state.registro.facebook = action.payload.facebook;
            return {...state}

        case "SET_GOOGLE":
            state.registro.google = action.payload.google;
            return {...state}

        case "SET_INITIALS":
            state.initials[action.payload.variable] = action.payload.valor;
            return {...state};

        case "SET_REGISTER":
            state.registro[action.payload.variable] = action.payload.valor;
            return {...state};            

        case "SET_USER":
                state.authenticated = action.payload.authenticated;
                return {...state};

        default:
          return state
      }
}

export default Reducer;