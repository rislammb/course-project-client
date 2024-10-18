import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccount } from "../../services/authService";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export type RegisterFormInput = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({ resolver: zodResolver(registerSchema) });
  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    try {
      const d = await createAccount(data);
      console.log("Create account success => ", d);
    } catch (err) {
      console.log("Error from create account => ", err);
    }
  };

  return (
    <main className="container mt-4" style={{ maxWidth: "410px" }}>
      <h1 className="text-center mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            placeholder="Name..."
            aria-describedby="nameError"
            className={`form-control ${
              errors.name?.message ? "is-invalid" : ""
            }`}
          />
          {errors.name?.message && (
            <small id="nameError" className="text-danger">
              {errors.name?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="confirmPassword"
            placeholder="Password..."
            aria-describedby="confirmPasswordError"
            className={`form-control ${
              errors.confirmPassword?.message ? "is-invalid" : ""
            }`}
          />
          {errors.confirmPassword?.message && (
            <small id="confirmPasswordError" className="text-danger">
              {errors.confirmPassword?.message}
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </main>
  );
}
