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

const style = {
  borderRadius: '5px',
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 220,
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
  name: string().nullable().trim().required("Новое имя"),
  lastName: string().nullable().trim().required("Новая фамилия"),
});

export default function EditProfileModal({
  user,
}: {
  user: User;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [error, setError] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [photo, setPhoto] = React.useState<FileList | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onHandleSubmit = async (user: UserEdit): Promise<void> => {
    user.photo = photo && photo[0];

    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }

    void dispatch(updateUserThunk(formData));
    handleClose();
    reset();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" type="button">
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
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onHandleSubmit)}
          >
            <div className="flex flex-row flex-wrap gap-2 my-5">
              <TextField
                className="w-40"
                label="Имя"
                variant="outlined"
                type="name"
                defaultValue={user.name}
                {...register("name")}
              />
              <TextField
                className="w-40"
                label="Фамилия"
                variant="outlined"
                type="lastName"
                defaultValue={user.lastName}
                {...register("lastName")}
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
                {photo && photo[0] ? `${photo[0].name}` : "Загрузить аватар"}

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
