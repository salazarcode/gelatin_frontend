import * as Facebook from 'expo-facebook';
import {Google} from 'expo';
import * as FileSystem from 'expo-file-system';

module.exports = {
    GetPictureAndSaveInServer: async (directory, name, url, width, height) => {
      let {uri} = await FileSystem.downloadAsync( url, directory + name );
  
      const file = {
        uri: uri,
        name: name, 
        type: "image/jpg"     
      }
  
      const body = new FormData()
      body.append('file', file)
      body.append('width', width)
      body.append('height', height)
      body.append('extension', "jpg")
      body.append('local_uri', uri)
  
      let remoteUri = await fetch("https://ivorystack.com/mainbk/public/api/files", {
        method: 'POST',
        body
      })
      .then(res => res.json())
      .then(res => {
        return res.data.uri
      })
      .catch(err => console.log(err));
      
      return remoteUri;  
    }
}