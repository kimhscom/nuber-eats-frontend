import React from "react";
import { useForm } from "react-hook-form";

interface ILoginForm {
  email?: string;
  password?: string;
}

export const Login = () => {
  const { register, getValues, errors, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = () => {};

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
        <h3 className="text-2xl text-gray-800">Log In</h3>
        <form
          className="grid gap-3 mt-7 px-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            ref={register({ required: "Email is required" })}
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          {errors.email?.message && (
            <span className="font-medium text-red-500">
              {errors.email?.message}
            </span>
          )}
          <input
            ref={register({ required: "Password is required", minLength: 8 })}
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {errors.password?.message && (
            <span className="font-medium text-red-500">
              {errors.password?.message}
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="font-medium text-red-500">
              Password must be more than 8 characters.
            </span>
          )}
          <button className="mt-3 btn">Log In</button>
        </form>
      </div>
    </div>
  );
};
