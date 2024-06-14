"use server";

import * as Yup from "yup";
import { SignUpschema } from "../schemas/registrationSchema";

const URL: string = "http://localhost:5000";

interface Ioptions {
  method: string;
  headers: { "Content-Type": string; Authorization: string };
  body?: any;
  cache?: any;
  next?: any;
}

export const optionGenerator = async (
  method: string,
  data: any,
  token: string | undefined = undefined,
  cache: any = undefined
) => {
  const options: Ioptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `{Bearer ${token} }`,
    },
    next: { tags: ["todos"] },
    // next: { revalidate: 1 },
  };

  if (Object.keys(data).length > 0) {
    options.body = JSON.stringify(data);
  }

  return options;
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
