import * as Yup from 'yup';
import { isAfter, parseISO } from 'date-fns';

export const  SignUpschema = Yup.object({
    firstName :Yup.string().required("First name is required"),
    lastName :Yup.string().required("Last name is required"),
    email:Yup.string().required("email is required").email("Email should be valid").trim(),
    password :Yup.string().required("password is required").trim().min(8).max(50),
    dob : Yup.date().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required")
})

export const signinSchema = Yup.object ({
    email: Yup.string().required("password is required").trim().min(8).max(50),
    password: Yup.string().required("password is required").trim().min(8).max(50),
})

export const addTodoSchema = Yup.object({
    name: Yup.string().required("Name is Required").max(100),
    desc: Yup.string().optional(),
    dueDate: Yup.date().required("Due date is required"),
})