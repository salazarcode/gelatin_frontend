import * as Facebook from 'expo-facebook';
import {Google} from 'expo';

export async function facebookInfo() 
{
    const { type, token, expires, permissions, declinedPermissions } = await Facebook.logInWithReadPermissionsAsync('401931543750381', {
        permissions: ['public_profile', 'email'],
    });
    if (type === 'success') 
    {
        let route = `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.type(large)`;  
        const response = await fetch(route);
        let FacebookInfo = await response.json(); 
        return FacebookInfo;
    } 
    else 
    {
        return undefined;
    }   
}

export async function googleInfo() 
{
    const result = await Google.logInAsync({
        androidClientId: "797683055907-qbfbsiiv856qqgk827hsg93nirvtnu4a.apps.googleusercontent.com",
        iosClientId: "797683055907-6ftmuc5rnkg0isfc7s0dfbju35bj96r6.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
    });
    return result;
}
