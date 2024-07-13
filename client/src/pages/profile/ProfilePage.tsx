"use client";

import "./styles/ProfilePage.css";
import { RootState, useAppDispatch } from "@/src/app/store/store";
import { createShelterThunk } from "@/src/entities/shelters/shelterSlice";
import { ShelterCreateWithLocation } from "@/src/entities/shelters/type/shelterTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
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
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHadleSubmit = async (
    createShelter: ShelterCreateWithLocation
  ): Promise<void> => {
    void dispatch(createShelterThunk(createShelter));
  };

  return (
    <div className="profile-page-container">
      <main className="profile-main-wrapper">
        <div className="profile-info-wrapper">
          <div className="profile-image"></div>
          <div className="profile-name-email-button">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <button>Edit</button>
          </div>
        </div>
        <form
          className="profile-shelter-form"
          onSubmit={handleSubmit(onHadleSubmit)}
        >
          <label htmlFor="name">
            <TextField
              id="profile-shelter-name"
              label="Shelter Name"
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
              label="Description"
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
              label="City"
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
              label="StreetName"
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
            Register Shelter
          </Button>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
