"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignUp;
