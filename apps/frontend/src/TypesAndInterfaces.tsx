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

export type PatchUser = {
    phoneNumber?: string,
    surname?: string,
    firstName?: string,
    lastName?: string,
    avatarKey?: string, 
}

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    googleId: null|string,
    avatarKey: null|string,
    isActive: boolean,
    schoolId: string,
    phoneNumber: string | null,
    surname: string | null,
}

export type UserLogInResValues = {
    user: User,
    accessToken: string,
    refreshToken: string,
}

export type School = {
    title: string,
    description: string,
    district: string,
    city: string,
    index: string,
    phone: string,
    email: string,
}

export type TestQuestion = {
    text: string,
    // file?: 
    answer: string[],
    answerOptions: string[],
    questionType: string,
    quizId: string,
    score: string
}

