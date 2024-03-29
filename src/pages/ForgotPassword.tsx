import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IUserAuthData } from "@/types/interface";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const initialState: Pick<IUserAuthData, "email"> = {
    email: "",
  };

  const [data, setData] = useState(initialState);

  // const [sendResetPassWordEmail] = useSendResetPassWordEmailMutation();

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="bg-primary-foreground min-h-screen flex items-center justify-center">
      <div className="w-[300px] md:w-[400px] rounded-lg shadow-lg bg-primary-foreground p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Password Reset</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Our servers will send password reset link to your email within 2
            minutes
          </p>
        </div>
        <div className="space-y-4">
          <form onSubmit={handlePasswordReset} className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="someone@gmail.com"
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
            <Button type="submit" className="w-full">
              Send Email
            </Button>
          </form>
          <Button
            onClick={() => navigate("/login")}
            variant="link"
            className="flex gap-1 w-full"
          >
            <span>Have an account?</span>
            <span className="text-blue-500">Login</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
