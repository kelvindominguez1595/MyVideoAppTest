import React, { createContext } from 'react'
import { authReducer, AuthStatus } from "./AuthReducer";

type AuthContextProps = {
    messageError: any;
    token: string | null;
    status: 'nologged' | 'logged' | 'wait';
    login: (data: SendLogin) => void;
    logout: () => void;
    verifyStatus: () => void;
    deleteMessage: () => void;
}
 
export const AuthContext = createContext({} as AuthContextProps);

export const AuthContext = ({childre} : any) => {
    const {Provider} = AuthContext;
    const[state, distpach] = useReducer(authReducer, authInitialStatus);

    
    
    const verifyStatus = async () => {
        const res: string = await getDataStorage('token');        
        if(!res)
        {
            return distpach({type: 'nologged'})
        } else {
            return distpach({type: 'login', payload: {
                token: res
            }})
        };
    }
    
    const login = async ({email, password}: SendLogin) => {     
        try {
            const res = await loginApi.post<DataResponseLogin>('/login',{ email, password,});
            distpach({
                type: 'login',
                payload: {
                    token: res.data.token
                }
            });
            await setDataStorage('token', res.data.token);
        } catch (error) {
            distpach({
                type: 'error',
                payload: 'Usuario o Contraseña no son validos'
            })
        }
    }

    const logout = async () => {
        distpach({
            type: 'logout'
        });     
       await removeDataStorage('token');
    }

    const deleteMessage = () => {
        distpach({
            type:'deleteError'
        })
    }
    
    return (
        <Provider value={{
            ...state,
            login, 
            logout,
            deleteMessage,
             verifyStatus
        }}>
            {children}
        </Provider>
    )
}
