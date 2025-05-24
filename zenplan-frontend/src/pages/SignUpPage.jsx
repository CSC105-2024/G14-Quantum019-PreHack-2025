import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Lock, Mail, User } from "lucide-react";
import FormInput from "@/components/ui/FormInput";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useRegister from "@/hooks/useRegister";

const SignUpPage = () => {
  {
    /*add show pass*/
  }
  const { registerUser, registerError, setRegisterError } = useRegister();

  const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    } else {
      await registerUser(data.name, data.email, data.password);
    }
    console.log("Form data: ", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-neutral-50 p-4">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-[var(--color-background)] rounded-full mb-4">
            <Leaf className="h-8 w-8 text-primary-500" />
          </div>
          <h1 className="!text-2xl font-semibold text-neutral-800">
            Create Your Account
          </h1>
          <p className="text-neutral-500 mt-2 text-center">
            Start your personalized wellness journey.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label={"Full Name"}
            icon={<User size={18} />}
            type={"text"}
            placeholder={"Enter your name"}
            {...register("name")}
          />

          <FormInput
            label={"Email"}
            icon={<Mail size={18} />}
            type={"email"}
            placeholder={"Enter your email"}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-1">{errors.email.message}</p>
          )}

          <FormInput
            label={"Password"}
            icon={<Lock size={18} />}
            type={"password"}
            placeholder={"Enter your password"}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-1">
              {errors.password.message}
            </p>
          )}

          <FormInput
            label={"Confirm Password"}
            icon={<Lock size={18} />}
            type={"password"}
            placeholder={"Re-enter your password"}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-1">
              {errors.confirmPassword.message}
            </p>
          )}

          <div className="mt-2 mb-6 flex justify-center items-center">
            <input
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-500 focus:ring-primary-400 border-neutral-300 rounded"
              required
            />
            <label className="ml-2 block text-sm text-neutral-700">
              I agree to the{" "}
              <Link
                to="/"
                className="text-[var(--color-secondary)] hover:text-primary-600 font-medium underline underline-offset-4"
              >
                {" "}
                {/*terms of service */}
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/"
                className="text-[var(--color-secondary)] hover:text-primary-600 font-medium underline underline-offset-4"
              >
                {" "}
                {/*Privacy policy*/}
                Privacy Policy
              </Link>
            </label>
          </div>
          {registerError && (
            <p className="text-red-500 text-md text-center my-3">
              {registerError}
            </p>
          )}
          <Button
            className="text-base bg-[var(--color-primary)] w-full cursor-pointer hover:bg-[var(--color-secondary)]"
            variant="default"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[var(--color-secondary)] hover:text-primary-600 font-medium underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
