import * as Yup from "yup";
import { addTodoSchema } from "../schemas/registrationSchema";
import { IResponse } from "./user";

export interface ITodoCard extends Yup.InferType<typeof addTodoSchema> {
  _id: string;
  status: boolean;
  createdAt: Date;
  userId: string;
}

export interface IAllTodos extends IResponse {
  data: ITodoCard[];
}

export interface ITodoResponse extends IResponse {
    data: ITodoCard[]
}