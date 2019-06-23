function MainReducer(state = {}, action){
    switch (action.type) {
        case "SET_TOKEN":
            state.token = action.payload.token;
            return state
        case "PASO1":
            const {
                pool_id,
                role_id,
                bajarDePeso,
                correrMaraton,
                normalizarDiabetes                
            } = action.payload;
            state.pool_id = pool_id;
            state.role_id = role_id;
            state.bajarDePeso = bajarDePeso;
            state.correrMaraton = correrMaraton;
            state.normalizarDiabetes = normalizarDiabetes;
            return state
        case "PASO2":
            const {
                sexo,
                nombre,
                ubicacion,
                edad,
                estatura     
            } = action.payload;
            state.sexo = sexo;
            state.nombre = nombre;
            state.ubicacion = ubicacion;
            state.edad = edad;
            state.estatura = estatura;
            return state
        case "PASO3":
            const {
                peso,
                cintura,
                peso_ideal
            } = action.payload;
            state.peso = peso;
            state.cintura = cintura;
            state.peso_ideal = peso_ideal;
            return state
        case "PASO4":
            const {
                intensidad_programa,
                actividad_fisica_actual,
                actividad_fisica_meta
            } = action.payload;
            state.intensidad_programa = intensidad_programa;
            state.actividad_fisica_actual = actividad_fisica_actual;
            state.actividad_fisica_meta = actividad_fisica_meta;
            return state
        case "PASO5":
            const {
                profile_picture,
                email,
                password,
            } = action.payload;
            state.profile_picture = profile_picture;
            state.email = email;
            state.password = password;
            return state
        default:
          return state
      }
}

export default MainReducer;