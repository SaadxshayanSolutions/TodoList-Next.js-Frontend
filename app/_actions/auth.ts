"use server";

import * as Yup from "yup";
import { SignUpschema } from "../schemas/registrationSchema";

const URL: string = "http://localhost:5000";

interface Ioptions {
  method: string;
  heders: { content_Type: string };
  body: any;
}

export const optionGenerator = async (method: string, data: any) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

export const signup = async (data: Yup.InferType<typeof SignUpschema>) => {
  try {
    const options = await optionGenerator("POST", data);

    const res = await fetch(`${URL}/users/signup`, options);

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
