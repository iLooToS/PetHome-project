"use client";
import "./styles/AuthorizationPage.css";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { authorizationThunk } from "@/src/entities/users/authSlice";
import { UserForLoga } from "@/src/entities/users/types/userTypes";
import { useAppDispatch } from "@/src/app/store/store";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";

const schema = object().shape({
  email: string().email().nullable().trim().required("Необходимо указать email"),
  password: string()
    .trim()
    .required("Необходимо указать пароль")
    .min(5, "пароль жолжен быть не менее 5 символов ")
    .max(20, "пароль должен быть не более 20 символов"),
});

function AuthorizationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onHadleSubmit = async (user: UserForLoga): Promise<void> => {
    console.log(user);
    void dispatch(authorizationThunk(user));
    router.push("/");
  };

  return (
    <div className="AuthorizationPage-container">
      <form onSubmit={handleSubmit(onHadleSubmit)}>
        <label htmlFor="email">
          <TextField
            id="auth-Email"
            label="Электронная почта"
            variant="outlined"
            type="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </label>
        <label htmlFor="password">
          <TextField
            id="auth-password"
            label="Пароль"
            variant="outlined"
            type="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </label>
        <div className="button-container">
          <Button variant="contained" type="submit">Войти</Button>
        </div>
      </form>
    </div>
  );
}

export default AuthorizationPage;
