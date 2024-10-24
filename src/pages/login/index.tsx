import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogin } from "../../services/authService";
import { setAuthUser } from "../../store/auth-slice";
import { useAppDispatch } from "../../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await userLogin(data);
      dispatch(setAuthUser(res.data));
      return navigate("/");
    } catch (err: any) {
      console.log("Error from login => ", err);
      setError(
        err.response?.data?.error ?? err?.message ?? "Something went wrong!"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="container mt-4" style={{ maxWidth: "410px" }}>
      <h1 className="text-center mb-4">{t("login")}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {t("email")}
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
            {t("password")}
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
          {error && <p className="small text-danger">{error}</p>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {t("login")}
          {submitting && <span className="submittig" />}
        </button>
      </form>
    </main>
  );
}
