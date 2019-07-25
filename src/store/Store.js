import { createStore } from 'redux'
import Reducer from './Reducer'

const INITIAL_STATE = {
    estaFuera: false,
    env: "PROD",
    prod: "http://www.gelatin.ivorystack.com/api",
    dev: "http://www.gelatin.ivorystack.com/api",
    autenticacion: {
        pool_id:1,
        role_id:3, //premium por ahora
        registro: {
            //DATOS PERSONALES          
            profile_picture:"",  
            sexo: "",
            nombre: "",
            ubicacion: "",
            edad: "18",
            estatura: "100",

            //CUAL ES TU OBJETIVO
            objetivos: [],

            //PESO
            peso_actual : "20",
            cintura: "20",
            peso_ideal: "20",

            //ACTIVIDAD
            actividad_fisica_actual:"1",
            actividad_fisica_meta:"1",
            habitos: [],
            user_id: undefined
        },
        authenticated: undefined,   

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