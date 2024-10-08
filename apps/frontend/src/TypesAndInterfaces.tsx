export type UserLogInValues = {  email: string;
  password: string;
};

export type UserRegisterValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ActivateTeacher = {
  verificationToken: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type PatchUser = {
  phoneNumber?: string;
  surname?: string;
  firstName?: string;
  lastName?: string;
  avatarKey?: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  googleId: null | string;
  avatarKey: null | string;
  surname: string | null;
  phoneNumber: string | null;
  isActive: boolean;
  schoolId: string;
  userRoles: UserRoles[];
};

export type UserRoles = {
  role: string;
}

export type UserLogInResValues = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export type ICreateSchool = {
  title: string;
  description: string;
  district: string;
  city: string;
  index: string;
  phone: string;
  email: string;
};

export type School = {
  id: string;
  title: string;
  description: string;
  district: string;
  city: string;
  index: string;
  phone: string;
  email: string;
};

export type TestQuestion = {
  text: string;
  // file?:
  answer: string;
  answerOptions: string;
  questionType: string;
  quizId: string;
  score: string;
};

export type SchoolClass = {
  id: string;
  title: string;
  schoolId: string;
  homeroomTeacherId: string;
};

export type Student = {
  id: string;
  userId: string;
  classId: string;
  user: User;
};
