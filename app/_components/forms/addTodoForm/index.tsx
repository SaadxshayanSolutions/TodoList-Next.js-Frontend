"use client"

import { addTodoSchema, signinSchema } from "@/app/schemas/registrationSchema";
import { FormikHelpers, Formik, Form, Field } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import TextInput from "../../inputs/TextInput";
import DateInput from "../../inputs/DateInput";
import TextAreaInput from "../../inputs/TextAreaInput";
import { addTodo } from "@/app/_actions/Todos";

const initialValues = {
  name: "test",
  desc: "Testings",
  dueDate: new Date(),
};


const AddTodoForm = () => {
  const [ispending, startTransition] = useTransition();

  const handleAddTodo = async (
    values: Yup.InferType<typeof addTodoSchema>,
    { resetForm }: FormikHelpers<Yup.InferType<typeof addTodoSchema>>
  ) => {
    startTransition(async () => {

      const res : any = await addTodo(values);


      console.log("add Todo success",res)

      if(!res.success) {

        toast.error(res.message);

      } else {

        toast.success(res.message);

        resetForm();

      }

    //   router.refresh()

    });
  };

  return (
    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={addTodoSchema}
      onSubmit={handleAddTodo}
    >
      <Form className="space-y-2">
        <Field
          component={TextInput}
          name="name"
          label="Name"
          placeholder="Name"
        />
        <Field
          component={DateInput}
          name="dueDate"
          label="Due Date"
          placeholder="Due Date"
        />
        <Field
          component={TextAreaInput}
          name="desc"
          label="Description"
          placeholder="Description"
          type = "text-area"
          rows = {4}
        />
        <button
          className="w-full bg-green-500 disabled:bg-green-600 p-2 mt-4"
          type="submit"
          disabled={ispending}
        >
          {ispending ? "Singning in..." : "Sign in"}
        </button>
      </Form>
    </Formik>
    </div>
  );
};

export default AddTodoForm;
