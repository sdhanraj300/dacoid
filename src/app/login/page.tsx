import React from "react";
import AuthForm from "../components/AuthForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AuthForm heading="Welcome Back" isLogin action="Sign In" />
    </div>
  );
};

export default page;
