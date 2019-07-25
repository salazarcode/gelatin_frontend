let Reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            state.token = action.payload.token;
            return {...state}

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
            state.facebook = action.payload.facebook;
            return {...state}

        case "SET_GOOGLE":
            state.google = action.payload.google;
            return {...state}

        case "SET_INITIALS":
            state.autenticacion.initials[action.payload.variable] = action.payload.valor;
            return {...state};

        case "SET_REGISTER":
            state.autenticacion.registro[action.payload.variable] = action.payload.valor;
            return {...state};            

        case "SET_USER":
                state.autenticacion.authenticated = action.payload.authenticated;
                state.autenticacion.registro.user_id = action.payload.authenticated.user.id;
                return {...state};

        default:
          return state
      }
}

export default Reducer;