"use client";
import "./styles/RegistrationPage.css";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { number, object, ref, string } from "yup";
import { useAppDispatch } from "../../app/store/store";
import { UserWithoutIdwithPassword } from "@/src/entities/users/types/userTypes";
import { registrationThunk } from "@/src/entities/users/authSlice";
import { useRouter } from "next/navigation";

const schema = object().shape({
  name: string().nullable().trim().required("Обязательно для заполнения"),
  lastName: string().nullable().trim().required("Обязательно для заполнения"),
  email: string().email().nullable().trim().required("Не email"),
  password: string()
    .trim()
    .required("Необходимо указать пароль")
    .min(5, "пароль жолжен быть не менее 5 символов ")
    .max(20, "пароль должен быть не более 20 символов"),
  cpassword: string()
    .trim()
    .required("Необходимо повторить пароль")
    .min(5, "пароль жолжен быть не менее 5 символов ")
    .max(20, "пароль должен быть не более 20 символов")
    .oneOf([ref("password")], "Пароли не совпадают"),
});

function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHadleSubmit = async (
    user: UserWithoutIdwithPassword
  ): Promise<void> => {
    const { cpassword, ...userWithoutCpassword } = user;
    console.log(userWithoutCpassword);
    void dispatch(registrationThunk(userWithoutCpassword));
    router.push("/");
  };

  return (
    <div className="RegistrationPage-container">
      <form onSubmit={handleSubmit(onHadleSubmit)}>
        <label htmlFor="name">
          Name:
          <input type="text" {...register("name")} />
          <span>{errors.name?.message}</span>
        </label>
        <br />
        <label htmlFor="lastName">
          lastName:
          <input type="text" {...register("lastName")} />
          <span>{errors.name?.message}</span>
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input type="email" {...register("email")} />
          <span>{errors.email?.message}</span>
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" {...register("password")} />
          <span>{errors.password?.message}</span>
        </label>
        <br />
        <label htmlFor="cpassword">
          Check password:
          <input type="password" {...register("cpassword")} />
          <span>{errors.cpassword?.message}</span>
        </label>
        <br />
        <div className="button-container">
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
