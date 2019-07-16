function MainReducer(state = {}, action){
    switch (action.type) {
        case "SET_TOKEN":
            state.token = action.payload.token;
            return state

        case "SET_CHAT":
            state.chat = action.payload.chat;
            return state

        case "SET_MESSAGES":
            state.messages = action.payload.messages;
            return state            

        case "ADD_MESSAGE":
            state.messages = [...state.messages, action.payload.message]
            return state            
            
        case "SET_FACEBOOK":
            state.facebook = action.payload.facebook;
            return state

        case "SET_GOOGLE":
            state.google = action.payload.google;
            return state

        case "SET_INITIALS":
            state.initials = action.payload.initials;
            return state        

        case "SET_REGISTER":
            state.registro = action.payload.registro;
            return state;

        default:
          return state
      }
}

export default MainReducer;