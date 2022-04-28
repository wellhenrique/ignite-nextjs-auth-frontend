import type { NextPage } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  );
};

export default Home;
