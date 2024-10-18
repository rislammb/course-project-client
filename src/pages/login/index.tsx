import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../services/authService";
import { setAuthUser } from "../../store/auth-slice";
import { useAppDispatch } from "../../hooks";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6),
});

export type LoginFormInput = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({ resolver: zodResolver(loginSchema) });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      await login(data);
      const user = {
        name: "Test",
        email: "test@email.com",
        token: "d834u7r7x346cr4c7747c45y7c5454n74ncj47n",
      };
      dispatch(setAuthUser(user));
    } catch (err) {
      console.log("Error from login => ", err);
    }
  };

  return (
    <main className="container mt-4" style={{ maxWidth: "410px" }}>
      <h1 className="text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            {...register("email")}
            id="email"
            placeholder="Email..."
            aria-describedby="emailError"
            className={`form-control ${
              errors.email?.message ? "is-invalid" : ""
            }`}
          />
          {errors.email?.message && (
            <small id="emailError" className="text-danger">
              {errors.email?.message}
            </small>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Password..."
            aria-describedby="passwordError"
            className={`form-control ${
              errors.password?.message ? "is-invalid" : ""
            }`}
          />
          {errors.password?.message && (
            <small id="passwordError" className="text-danger">
              {errors.password?.message}
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </main>
  );
}
