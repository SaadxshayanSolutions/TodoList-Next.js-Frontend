"use server";

import { addTodoSchema } from "../schemas/registrationSchema";
import { optionGenerator } from "./auth";
import * as Yup from "yup";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import {
  ErrorResponse,
  IErrorResponseArray,
  IUserSignin,
} from "../interfaces/user";
import { IAllTodos, ITodoCard, ITodoResponse } from "../interfaces/todos";

const URL: string = "http://localhost:5000/todos";

export const addTodo = async (data: Yup.InferType<typeof addTodoSchema>) => {
  try {
    const session: { user: IUserSignin } | null = await getServerSession(
      options
    );

    const RequestOptions = await optionGenerator(
      "POST",
      data,
      session?.user?.token
    );

    const res = await fetch(`${URL}`, RequestOptions);

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getAllTodos = async (): Promise<
  ITodoResponse | IErrorResponseArray
> => {
  try {
    const session: { user: IUserSignin } | null = await getServerSession(
      options
    );

    const RequestOptions = await optionGenerator(
      "GET",
      {},
      session?.user.token
    );

    const res = await fetch(`${URL}`, RequestOptions);

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};

export const deleteTodo = async (
  id: string
): Promise<IAllTodos | ErrorResponse> => {
  try {
    const session: { user: IUserSignin } | null = await getServerSession(
      options
    );

    const RequestOptions = await optionGenerator(
      "DELETE",
      {},
      session?.user.token
    );

    const res = await fetch(`${URL}/${id}`, RequestOptions);

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: {},
    };
  }
};

export const toggleStatus = async (
  data: ITodoCard,
  id: string
): Promise<IAllTodos | ErrorResponse> => {
  try {
    const session: { user: IUserSignin } | null = await getServerSession(
      options
    );

    const RequestOptions = await optionGenerator(
      "PATCH",
      data,
      session?.user.token
    );

    const res = await fetch(`${URL}/${id}`, RequestOptions);

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: {},
    };
  }
};

export const editTodo = async (
  data: ITodoCard,
  id: string
): Promise<IAllTodos | ErrorResponse> => {
  try {
    const session: { user: IUserSignin } | null = await getServerSession(
      options
    );

    const RequestOptions = await optionGenerator(
      "PUT",
      data,
      session?.user.token
    );

    const res = await fetch(`${URL}/${id}`, RequestOptions);

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
      data: {},
    };
  }
};
