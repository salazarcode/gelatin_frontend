import {StyleSheet} from 'react-native'

const theColor = "#3fc8ea";
const theElevation = 4;
const theSize = 200;

const styles = StyleSheet.create({
    SurfaceAlarmBtn: {
      position: 'absolute', 
      height:35, 
      width:35, 
      right: 0, 
      borderRadius:20, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: "white",
      elevation: 7
    },
    container: {
      flex:1,
      display: "flex",
      flexDirection: "column"
    },
    headerAll: {    
      width: "100%",
      padding: 20
    },
    titulosView: {
      height: "10%",
      width: "100%"
    },
    headerT:{
      color:"white",
      fontWeight: "800"
    },
    caja_1: {
      padding: 20,
      backgroundColor: "#3fc8ea",
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cajitas_laterales: {
      width: 95, 
      height: 50,
      backgroundColor: "white",
      borderRadius: 50,
      elevation: 7, 
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cajita_central: {
      width: 110, 
      height: 110,
      backgroundColor: "white",
      borderRadius: 70,
      elevation: 7, 
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textoCentral: {
      color:"red",
      textAlign: "center",
      fontWeight:"800"
    },
  
    SurfaceCalorias:{
      width: "60%",
      height: "12%",
      margin: 10,
      padding: 10,
      elevation: 7,
      alignSelf: "center",
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    SurfaceAlarmas:{
      width: "100%",
      height: "12%",
      margin: 20,
      padding: 5,
      elevation: 7,
      alignSelf: "center",
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    CaloriasText: {
      color: "#3fc8ea",
      fontWeight: "800"
    }
  
  });

export {
    theColor, 
    theElevation, 
    theSize, 
    styles
} 