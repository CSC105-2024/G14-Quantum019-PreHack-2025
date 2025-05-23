import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Lock, Mail, User } from "lucide-react";
import FormInput from "@/components/ui/FormInput";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-neutral-50 p-4">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-muted rounded-full mb-4">
            <Leaf className="h-8 w-8 text-primary-500" />
          </div>
          <h1 className="!text-2xl font-semibold text-neutral-800">
            Create Your Account
          </h1>
          <p className="text-neutral-500 mt-2 text-center">
            Start your personalized wellness journey.
          </p>
        </div>

        <form>
          <FormInput
            label={"Full Name"}
            icon={<User size={18} />}
            type={"text"}
            placeholder={"Enter your name"}
          />

          <FormInput
            label={"Email"}
            icon={<Mail size={18} />}
            type={"email"}
            placeholder={"Enter your email"}
          />

          <FormInput
            label={"Password"}
            icon={<Lock size={18} />}
            type={"password"}
            placeholder={"Enter your password"}
          />

          <FormInput
            label={"Confirm Password"}
            icon={<Lock size={18} />}
            type={"password"}
            placeholder={"Re-enter your password"}
          />

          <div className="mt-2 mb-6 flex justify-center items-center">
            <input
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-500 focus:ring-primary-400 border-neutral-300 rounded"
              required
            />
            <label className="ml-2 block text-sm text-neutral-700">
              I agree to the{" "}
              <a
                href="#"
                className="!text-[var(--secondary)] hover:text-primary-600"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="!text-[var(--secondary)] hover:text-primary-600"
              >
                Privacy Policy
              </a>
            </label>
          </div>
          <Button className="text-base !bg-primary w-full" variant="default">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <a
              href="#"
              className="!text-[var(--secondary)] hover:text-primary-600 font-medium"
            >
              Sign in
            </a>{" "}
            {/*change to Link later */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
