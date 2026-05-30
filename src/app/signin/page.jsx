"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignInPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    const { error } = await authClient.signIn.email({
      email: formValues.email,
      password: formValues.password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Sign in successful! Welcome to Tiles Gallery!");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="px-4 py-8">
      <Card className="border mx-auto w-full max-w-md p-6 sm:p-8">
        <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type={isShowPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>

            <div className="relative">
              <Input className="w-full" placeholder="Enter your password" />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="submit">
              <Check />
              Login
            </Button>

            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>

        <p className="text-center mt-5 text-gray-500">Or</p>

        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={handleGoogleSignIn}
        >
          <GrGoogle />
          Sign in with Google
        </Button>

        <p className="text-center mt-5 text-sm text-gray-600">
          Dont have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[#2A3C50] hover:underline"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}
