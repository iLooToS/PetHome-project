"use client";

import "./styles/ProfilePage.css";
import { RootState, useAppDispatch } from "@/src/windows/app/store/store";
import {
  confirmShelterThunk,
  createShelterThunk,
  deleteShelterThunk,
  getAllSheltersThunk,
} from "@/src/windows/entities/shelters/shelterSlice";
import { ShelterCreateWithLocation } from "@/src/windows/entities/shelters/type/shelterTypes";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { number, object, ref, string } from "yup";

const schema = object().shape({
  name: string().nullable().trim().required("Обязательно для заполнения"),
  city: string().nullable().trim().required("Обязательно для заполнения"),
  streetName: string().nullable().trim().required("Обязательно для заполнения"),
  description: string()
    .nullable()
    .trim()
    .required("Обязательно для заполнения"),
});

const ProfilePage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { shelters } = useSelector((state: RootState) => state.shelters);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onHadleSubmit = async (
    createShelter: ShelterCreateWithLocation
  ): Promise<void> => {
    void dispatch(createShelterThunk(createShelter));
    setIsOpen((prev) => !prev);
    reset();
  };

  const onHandleDelete = async (id: number): Promise<void> => {
    void dispatch(deleteShelterThunk(id));
  };

  const onHandleConfirm = async (id: number): Promise<void> => {
    void dispatch(confirmShelterThunk(id));
  };

  useEffect(() => {
    dispatch(getAllSheltersThunk());
  }, [dispatch]);

  return (
    <div className="profile-page-container">
      <main className="profile-main-wrapper">
        <div className="profile-info-wrapper">
          <div className="profile-image"></div>
          <div className="profile-name-email-button">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            {user && user.roleId !== 2 && (
              <Button variant="contained" type="button">
                Edit
              </Button>
            )}
          </div>
        </div>
        {user && user.roleId === 2 && (
          <div>
            <h1>Я админ</h1>
            <div className="admin-profile-confirm-container">
              {shelters &&
                shelters
                  .filter((shelter) => shelter.status === false)
                  .map((shelter) => (
                    <div
                      key={shelter.id}
                      className="admin-profile-card-wrapper"
                    >
                      {shelter && shelter.logo && (
                        <Image
                          src={shelter.logo}
                          alt="Shelter Image"
                          style={{ width: "200", height: "200px" }}
                        />
                      )}
                      <h1>Название: {shelter.name}</h1>
                      <h2>
                        Владелец: {shelter.User?.name} {shelter.User?.lastName}
                      </h2>
                      <p>Описание: {shelter.description}</p>
                      <Button
                        onClick={() => onHandleConfirm(shelter.id)}
                        variant="contained"
                        type="button"
                      >
                        Подтвердить
                      </Button>
                      <Button
                        onClick={() => onHandleDelete(shelter.id)}
                        variant="contained"
                        type="button"
                        color="error"
                      >
                        Отклонить
                      </Button>
                    </div>
                  ))}
            </div>
          </div>
        )}
        <div>
          {!isOpen && user && user.roleId !== 2 && (
            <Button
              onClick={() => setIsOpen((prev) => !prev)}
              variant="contained"
              type="button"
            >
              Создать приют
            </Button>
          )}
        </div>
        {isOpen && (
          <form
            className="profile-shelter-form"
            onSubmit={handleSubmit(onHadleSubmit)}
          >
            <label htmlFor="name">
              <TextField
                id="profile-shelter-name"
                label="Название приюта"
                variant="outlined"
                type="text"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>
              {/* <input
              type="text"
              {...register("name")}
              placeholder="Shelter Name"
              style={{ margin: "10px 0", padding: "10px", width: "100%" }}
            /> */}
            </label>
            <label htmlFor="description">
              <TextField
                id="profile-shelter-description"
                label="Описание"
                variant="outlined"
                multiline
                rows={5}
                type="text"
                {...register("description")}
              />
              <span>{errors.name?.message}</span>
              {/* <input
              type="text"
              {...register("description")}
              placeholder="Description"
              style={{ margin: "10px 0", padding: "10px", width: "100%" }}
            /> */}
            </label>
            <label htmlFor="city">
              <TextField
                id="profile-shelter-city"
                label="Город"
                variant="outlined"
                type="text"
                {...register("city")}
              />
              {/* <input
              type="text"
              {...register("city")}
              placeholder="City"
              style={{ margin: "10px 0", padding: "10px", width: "100%" }}
            /> */}
              <span>{errors.name?.message}</span>
            </label>
            <label htmlFor="streetName">
              <TextField
                id="profile-shelter-streetName"
                label="Улица"
                variant="outlined"
                type="text"
                {...register("streetName")}
              />
              {/* <input
              type="text"
              {...register("streetName")}
              placeholder="Street Name"
              style={{ margin: "10px 0", padding: "10px", width: "100%" }}
            /> */}
              <span>{errors.name?.message}</span>
            </label>
            <Button
              variant="contained"
              type="submit"
              // style={{
              //   padding: "10px 20px",
              //   backgroundColor: "black",
              //   color: "white",
              //   border: "none",
              //   borderRadius: "5px",
              // }}
            >
              Зарегистрировать приют
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              // style={{
              //   padding: "10px 20px",
              //   backgroundColor: "black",
              //   color: "white",
              //   border: "none",
              //   borderRadius: "5px",
              // }}
            >
              Закрыть
            </Button>
          </form>
        )}

        <div className="py-10">
          {isShow && shelters.find((shelter) => shelter.userId === user?.id) ? (
            <Button
              onClick={() => setIsShow((prev) => !prev)}
              variant="contained"
              type="button"
            >
              Закрыть
            </Button>
          ) : (
            !isShow &&
            shelters.find((shelter) => shelter.userId === user?.id) && (
              <Button
                onClick={() => setIsShow((prev) => !prev)}
                variant="contained"
                type="button"
              >
                Показать мои приюты
              </Button>
            )
          )}
        </div>
        <div className="py-10">
          {isShow &&
            shelters
              .filter((shelter) => shelter.userId === user?.id)
              .map((shelter) => (
                <div className="shelter-info-wrapper" key={shelter.id}>
                  {shelter.status === false ? (
                    <>
                      <h1>Приют: {shelter.name} проверяется администрацией.</h1>
                      <h2>С вами свяжутся если понадобиться дополнительная информация.</h2>
                    </>
                  ) : (
                    <>
                      <p>{shelter.name}</p>
                      <p>{shelter.Location?.city}</p>
                      <Button
                        href={`/shelter/${shelter.id}`}
                        variant="contained"
                        type="button"
                      >
                        Перейти в приют
                      </Button>
                      <Button
                        color="error"
                        onClick={() => onHandleDelete(shelter.id)}
                        variant="contained"
                        type="button"
                      >
                        Удалить приют
                      </Button>
                    </>
                  )}
                </div>
              ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
