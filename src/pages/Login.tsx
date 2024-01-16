import { useState } from "react";
import { supabase } from "../supabase";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword(user);
    console.log(data, error);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
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
      <button type="submit">Login User</button>
    </form>
  );
};

export default Login;
