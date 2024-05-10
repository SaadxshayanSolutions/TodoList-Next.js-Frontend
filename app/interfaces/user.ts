import * as Yup from "yup";
export interface IResponse {
  success: string;
  message: string;
}

export interface IUserSignin {
  firstName: string;
  lastName: string;
  dob: Date;
  gender: string;
  token: string,
}

export interface IUserInfo extends IResponse {
  data: IUserSignin;
}
