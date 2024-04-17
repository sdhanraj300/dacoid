import React from "react";
import AuthForm from "../components/AuthForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AuthForm
        isLogin={false}
        heading="Create an account"
        action="Create An Account"
      />
    </div>
  );
};

export default page;
