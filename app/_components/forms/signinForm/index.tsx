"use client"

import { signinSchema } from "@/app/schemas/registrationSchema";
import { FormikHelpers, Formik, Form, Field } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import TextInput from "../../inputs/TextInput";

const initialValues = {
  email: "",
  password: "",
};


const SigninForm = () => {
  const [ispending, startTransition] = useTransition();
  const router = useRouter();

  const handleSignInSubmit = async (
    values: Yup.InferType<typeof signinSchema>,
    { resetForm }: FormikHelpers<Yup.InferType<typeof signinSchema>>
  ) => {
    startTransition(async () => {

      const res : any = await signIn('credentials',{...values, redirect: false});

      if(!res.ok) {

        toast.error(`Invalid Credentials`);
        return;

      }

      toast.success("User signed in");

      resetForm();

      router.push("/")

      router.refresh()

    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={handleSignInSubmit}
    >
      <Form className="space-y-2">
        <Field
          component={TextInput}
          name="email"
          label="Email"
          placeholder="Email"
        />
        <Field
          component={TextInput}
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
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
  );
};

export default SigninForm;
