"use client"

import { addTodoSchema, signinSchema } from "@/app/schemas/registrationSchema";
import { FormikHelpers, Formik, Form, Field } from "formik";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import TextInput from "../../inputs/TextInput";
import DateInput from "../../inputs/DateInput";
import TextAreaInput from "../../inputs/TextAreaInput";
import { addTodo, editTodo } from "@/app/_actions/Todos";
import { ITodoCard } from "@/app/interfaces/todos";
import { Button } from "@/components/ui/button";



const EditTodoForm = (
  {
    todo, 
    handleShowForm 
  } : {
    todo : ITodoCard, 
    handleShowForm: () => void
  }) => {
  const [ispending, startTransition] = useTransition();

  const initialValues = {
    name: todo.name,
    desc: todo.desc,
    dueDate: todo.dueDate,
  };

  const handleEditTodo = (
    values: Yup.InferType<typeof addTodoSchema>,
  ) => {

    startTransition(async() => {
        const response =  await editTodo({...todo,name:values.name,desc:values.desc,dueDate:values.dueDate},todo._id)

        if(!response.success) {
             toast.error(response.message)
             return;
        }
        handleShowForm()
        
        toast.success("Todo Edited succesfully")
     })

    try {
        
    } catch (error:any) {
        toast.error(error.message)
        
    }      
}

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-800">
      <div className="absolute w-1/3 bg-slate-600 p-6 mx-auto rounded-sm">
        <Formik
          initialValues={initialValues}
          validationSchema={addTodoSchema}
          onSubmit={handleEditTodo}
        >
          <Form>
            <div className="space-y-4">

              <div className="">
                <Field
                  component={TextInput}
                  name="name"
                  label="Name"
                  placeholder="Name"
                />
              </div>

              <div className="">
                <Field
                  component={DateInput}
                  name="dueDate"
                  label="Due Date"
                  placeholder="Due Date"
                />
              </div>

              <div className="">
                <Field
                  component={TextInput}
                  name="desc"
                  label="Description"
                  placeholder="Description"
                />
              </div>

              <div className="flex justify-center items-center">
                <Button
                  className="bg-green-500 disabled:bg-orange-300 min-w-28 p-2 mt-4 rounded-md mx-auto"
                  type="submit"
                  disabled={ispending}
                >
                  {ispending ? "Updating Todo..." : "Edit Todo"}
                </Button>

                <Button
                  className="p-2 mt-4 min-w-28 rounded-md mx-auto"
                  variant= "destructive"
                  onClick={handleShowForm}
                >
                  Cencel
                </Button>

              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditTodoForm;
