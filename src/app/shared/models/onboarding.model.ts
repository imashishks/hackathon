export interface SignUpPayload {
  employeeId: string;
  name: string;
  emailId: string;
  password: string;
}
export interface SignUpResponse {
  error: boolean;
  message: string;
  data: UserData;
}

export interface LoginPayload {
  employeeId: string;
  password: string;
}

export interface LoginResponse {
  name: string;
  emailId: string;
  employeeId: string;
  score: string;
  token: string;
}

export interface UserData {
  name: string;
  emailId: string;
  employeeId: string;
  score: string;
  token?: string;
}
