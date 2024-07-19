import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
  TextField,
} from "@mui/material";
import { IPetCreate } from "@/src/windows/entities/pets/types/PetsTypes";
import { useAppDispatch } from "@/src/windows/app/store/store";
import { createPetsThunk } from "@/src/windows/entities/pets/petsSlice";
import { CloudUploadIcon } from "lucide-react";
import { User, UserEdit } from "../../entities/users/types/userTypes";
import { updateUserThunk } from "../../entities/users/authSlice";
import {
  Shelter,
  ShelterUpdate,
} from "../../entities/shelters/type/shelterTypes";
import { updateShelterThunk } from "../../entities/shelters/shelterSlice";

const style = {
  borderRadius: "5px",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 2,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const schema = object().shape({
  name: string().nullable().trim().required("Обязательно для заполнения"),
  city: string().nullable().trim().required("Обязательно для заполнения"),
  streetName: string().nullable().trim().required("Обязательно для заполнения"),
  description: string()
    .nullable()
    .trim()
    .required("Обязательно для заполнения"),
  phone: string().nullable().trim().required("Обязательно для заполнения"),
});

export default function EditShelterModal({
  shelter,
}: {
  shelter: Shelter;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [error, setError] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [photo, setPhoto] = React.useState<FileList | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let currentShelter = shelter;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onHandleSubmit = async (shelter: ShelterUpdate): Promise<void> => {
    shelter.photo = photo && photo[0];

    shelter.shelterId = currentShelter.id;
    console.log(shelter);
    const formData = new FormData();
    for (const key in shelter) {
      formData.append(key, shelter[key]);
    }
    
    void dispatch(updateShelterThunk(formData));
    handleClose();
    reset();
  };

  return (
    <div>
      <Button
        className="w-full"
        onClick={handleOpen}
        variant="contained"
        type="button"
        color="warning"
      >
        Редактировать
      </Button>
      <Modal
        className="p-3.5"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(onHandleSubmit)}
          >
            <div className="flex flex-row flex-wrap gap-2 justify-center margin-bottom 10px my-5 ">
              <TextField
                className="w-80"
                label="Название"
                variant="outlined"
                type="name"
                defaultValue={shelter.name}
                {...register("name")}
              />
              <TextField
                className="w-80"
                label="Описание"
                variant="outlined"
                multiline
                rows={5}
                type="text"
                defaultValue={shelter.description}
                {...register("description")}
              />
              <TextField
                className="w-80"
                label="Город"
                variant="outlined"
                type="text"
                defaultValue={shelter.Location?.city}
                {...register("city")}
              />
              <TextField
                className="w-80"
                label="Улица"
                variant="outlined"
                type="text"
                defaultValue={shelter.Location?.streetName}
                {...register("streetName")}
              />
              <TextField
                className="w-80"
                label="Телефон"
                variant="outlined"
                type="text"
                defaultValue={shelter.phone}
                {...register("phone")}
              />
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                color={error ? "error" : "info"}
                onChange={(e: React.MouseEvent<HTMLLabelElement>) => {
                  const target = e.target as HTMLInputElement;
                  setPhoto(target.files);
                }}
                startIcon={<CloudUploadIcon />}
              >
                {photo && photo[0] ? `${photo[0].name}` : "Загрузить логотип"}

                <VisuallyHiddenInput type="file" />
              </Button>
              <Button variant="contained" type="submit" color="success">
                Применить
              </Button>
              <Button
                variant="contained"
                type="submit"
                color="error"
                onClick={handleClose}
              >
                Отменить
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
