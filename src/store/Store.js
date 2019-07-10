import { createStore } from 'redux'
import Reducer from './reducers/MainReducer'

const INITIAL_STATE = {
    estaFuera: false,
    autenticacion: {
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
        password: undefined,        
    },
    token:"", 
    google: undefined,
    facebook: undefined,
    colores: {
        azulClaro: "#3CD1C9",
        azulOscuro: "#364F6B",
        rosa: "#FC5185",
        fondo: "#F5F5F5"
    },
    currentChat: undefined,
    currentMessages: undefined

}

const store = createStore(Reducer, INITIAL_STATE);

export default store