import {  LoginForm, UserDispatch } from '../../types/user';

export const login = (creds: LoginForm) =>(dispatch: UserDispatch) => {
  dispatch({ type: "LOGIN_START" });
  
 
}



 
  
