
import { SIGN_IN, SIGN_OUT } from '../actions/type';
import streams from '../apis/streams';
export const signIn=(userId)=>{
    return{
        type:SIGN_IN,
        paload:userId
    }
}

export const signOut=()=>{
    return{ 
        type:SIGN_OUT
    }
}

export const createStream= (formValue)=> async dispatch=>{
    streams.post('/streams', formValue)
}