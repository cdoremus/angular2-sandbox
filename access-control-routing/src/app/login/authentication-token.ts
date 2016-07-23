

export interface AuthenticationTokenProvider {
    getToken():string;
}

export const AUTHENTICATION_TOKEN_KEY: string = 'auth-token';