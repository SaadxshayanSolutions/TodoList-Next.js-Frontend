import * as Yup from "yup";
export interface IResponse {
  success: boolean;
  message: string;
}

export interface IUserSignin {
  firstName: string;
  lastName: string;
  dob: Date;
  gender: string;
  token: string;
}

export interface IUserInfo extends IResponse {
  data: IUserSignin;
}

export interface ErrorResponse extends IResponse {
  data: {};
}

export interface IErrorResponseArray extends IResponse {
  data: []
}
