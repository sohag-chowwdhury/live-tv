import { SIGN_IN, SIGN_OUT } from '../actions/type'
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