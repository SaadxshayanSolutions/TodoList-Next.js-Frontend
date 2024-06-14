"use client"

import { addTodoSchema, signinSchema } from "@/app/schemas/registrationSchema";
import { FormikHelpers, Formik, Form, Field } from "formik";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import TextInput from "../../inputs/TextInput";
import DateInput from "../../inputs/DateInput";
import TextAreaInput from "../../inputs/TextAreaInput";
import { addTodo } from "@/app/_actions/Todos";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { revalidateTag } from "next/cache";

const initialValues = {
  name: "",
  desc: "",
  dueDate: new Date(),
};


const AddTodoForm = () => {
  const [ispending, startTransition] = useTransition();

  const router = useRouter()

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

      router.refresh()

    });
  };

  return (
    <div className="bg-gray-700 p-2">
      <Formik
      initialValues={initialValues}
      validationSchema={addTodoSchema}
      onSubmit={handleAddTodo}
    >
      <Form>
        <div className="flex space-x-4 items-center">

          <div className="w-3/12">
            <Field
              component={TextInput}
              name="name"
              label="Name"
              placeholder="Name"
            />
          </div>

          <div className="w-3/12">
            <Field
              component={DateInput}
              name="dueDate"
              label="Due Date"
              placeholder="Due Date"
            />
          </div>

          <div className="w-4/12">
            <Field
              component={TextInput}
              name="desc"
              label="Description"
              placeholder="Description"
            />
          </div>

          <div className="w-2/12 flex justify-center">
            <Button
              className="bg-green-500 disabled:bg-orange-300 p-2 mt-4 w-2/3 rounded-md mx-auto hover:bg-green-600"
              type="submit"
              disabled={ispending}
            >
              {ispending ? "Adding Todo..." : "Add New Todo"}
            </Button>

          </div>
        </div>
      </Form>
    </Formik>
    </div>
  );
};

export default AddTodoForm;
