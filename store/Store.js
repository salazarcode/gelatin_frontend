import { createStore } from 'redux'
import MainReducer from './reducers/MainReducer'

const store = createStore(MainReducer, {
    token:"",
    pool_id:1,
    role_id:3, //premium por ahora
    bajarDePeso: false,
    correrMaraton: false,
    normalizarDiabetes: false,
    sexo: "",
    nombre: "",
    ubicacion: "",
    edad: undefined,
    estatura: undefined,
    peso : undefined,
    cintura: undefined,
    peso_ideal: undefined,
    intensidad_programa:undefined,
    actividad_fisica_actual:undefined,
    actividad_fisica_meta:undefined,
    profile_picture:"",
    email: undefined,
    password: undefined    
});

export default store