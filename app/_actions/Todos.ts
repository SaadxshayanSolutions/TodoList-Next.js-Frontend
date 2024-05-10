"use server";

import { addTodoSchema } from "../schemas/registrationSchema";
import { optionGenerator } from "./auth";
import * as Yup from "yup";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

const URL: string = "http://localhost:5000/todos";

export const addTodo = async (data: Yup.InferType<typeof addTodoSchema>) => {
  try {
    const session = await getServerSession(options);

    console.log("session token", session);
    const RequestOptions = await optionGenerator("POST", {
      ...data,
      token: session?.user?.token,
    });

    const res = await fetch(`${URL}`, RequestOptions);

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
