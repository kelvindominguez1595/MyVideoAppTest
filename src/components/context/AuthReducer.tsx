export interface AuthStatus {
    messageError: String;
    token: string | null;
    status: 'nologged' | 'logged' | 'wait';
}

type AuthAction = 
| { type: 'login', payload: {token: string}}
| { type: 'error', payload: string}
| { type: 'deleteError'}
| { type: 'nologged'}
| { type: 'logout'}

export const authReducer = (state: AuthStatus, action: AuthAction): AuthStatus => {
    switch (action.type) {
        case 'error':
            return {
                ...state,
                status: 'nologged',
                token: null,
                messageError: action.payload
            }
         case 'deleteError':
            return {
                ...state,            
                messageError: ''
            }
        case 'login':
            return {
                ...state,
               messageError: '',
               status: 'logged',
               token: action.payload.token               
            }
        case 'logout':
        case 'nologged':
            return {
                ...state,  
                status: 'nologged',     
                token: null
            }
        default:
            return state;            
    }
}
