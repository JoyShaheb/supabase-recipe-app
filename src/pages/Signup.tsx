import React, { useState } from "react";
import { supabase } from "../supabase";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      ...user,
      options: {
        emailRedirectTo: "https://example.com/welcome",
      },
    });
    console.log(data, error);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={handleInputChange}
          type="text"
          name="email"
          value={user.email}
          id="email"
        />
        <input
          required
          type="password"
          name="password"
          value={user.password}
          id="password"
          onChange={handleInputChange}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Signup;
