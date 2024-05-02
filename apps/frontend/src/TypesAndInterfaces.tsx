export type UserLogInValues = {
    email: string,
    password: string, 
}

export type UserRegisterValues = {
    email: string,
    password: string,
    firstName: string,
    lastName: string, 
}

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    googleId: null | string
}

export type UserLogInResValues = {
    user: User,
    accessToken: string,
    refreshToken: string,
}