import { createStore } from 'redux'
import Reducer from './Reducer'

const INITIAL_STATE = {
    estaFuera: false,
    env: "DEV",
    prod: "http://www.ivorystack.com/mainbk/api",
    dev: "http://www.ivorystack.com/mainbk/public/api",
    autenticacion: {
        pool_id:1,
        role_id:3, //premium por ahora
        registro: {
            //DATOS PERSONALES          
            profile_picture:"",  
            sexo: "",
            nombre: "",
            ubicacion: "",
            edad: undefined,
            estatura: undefined,

            //CUAL ES TU OBJETIVO
            objetivos: [],

            //PESO
            peso : undefined,
            cintura: undefined,
            peso_ideal: undefined,

            //ACTIVIDAD
            actividad_fisica_actual:undefined,
            actividad_fisica_meta:undefined,
            habitos: []
        },
        email: undefined,
        password: undefined,      
        initials: {
            objetivos:[],
            habitos: [],
            niveles: []
        },
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