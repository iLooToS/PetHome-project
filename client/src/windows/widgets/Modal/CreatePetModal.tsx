import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { IPetCreate } from "@/src/windows/entities/pets/types/PetsTypes";
import { useAppDispatch } from "@/src/windows/app/store/store";
import { createPetsThunk } from "@/src/windows/entities/pets/petsSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 2.5,
};

const schema = object().shape({
  name: string().nullable().trim().required("Обязательно для заполнения"),
  petType: string().nullable().trim().required("Обязательно для заполнения"),
  petSize: string().nullable().trim().required("Обязательно для заполнения"),
  age: number().nullable().required("Обязательно для заполнения"),
  isSex: string().nullable().trim().required("Обязательно для заполнения"),
  isCastration: string()
    .nullable()
    .trim()
    .required("Обязательно для заполнения"),
  isTemperament: string()
    .nullable()
    .trim()
    .required("Обязательно для заполнения"),
  isChipping: string().nullable().trim().required("Обязательно для заполнения"),
  isVaccination: string()
    .nullable()
    .trim()
    .required("Обязательно для заполнения"),
  isPassport: string().nullable().trim().required("Обязательно для заполнения"),
  description: string()
    .nullable()
    .trim()
    .required("Обязательно для заполнения"),
});

interface ShelterPageProps {
  shelterId: number;
}

export default function CreatePetModal({ shelterId }: ShelterPageProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onHandleSubmit = async (pet: IPetCreate): Promise<void> => {
    pet.shelterId = shelterId;
    console.log(pet);

    void dispatch(createPetsThunk(pet));
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Добавить питомца</button>
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
            <div className="flex flex-row flex-wrap gap-2 ">
              <TextField
                className="w-40"
                label="Имя"
                variant="outlined"
                type="name"
                {...register("name")}
              />
              <span className="w-40">{errors.name?.message}</span>

              <TextField
                className="w-40"
                label="Вид"
                variant="outlined"
                type="petType"
                {...register("petType")}
              />
              <span className="w-40">{errors.petType?.message}</span>

              <TextField
                className="w-40"
                label="Размер"
                variant="outlined"
                type="petSize"
                {...register("petSize")}
              />
              <span className="w-40">{errors.petSize?.message}</span>

              <TextField
                className="w-40"
                label="Возраст"
                variant="outlined"
                type="age"
                {...register("age")}
              />
              <span className="w-40">{errors.age?.message}</span>

              <TextField
                className="w-40"
                label="Описание"
                variant="outlined"
                type="description"
                {...register("description")}
              />
              <span className="w-40">{errors.description?.message}</span>
            </div>
            <label htmlFor="isSex">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Пол</FormLabel>
                <RadioGroup
                  className="flex flex-row"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={true}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Мальчик"
                    {...register("isSex")}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Девочка"
                    {...register("isSex")}
                  />
                </RadioGroup>
              </FormControl>
            </label>
            <label htmlFor="isTemperament">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Темперамент
                </FormLabel>
                <RadioGroup
                  className="flex flex-row"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={true}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Активный"
                    {...register("isTemperament")}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Спокойный"
                    {...register("isTemperament")}
                  />
                </RadioGroup>
              </FormControl>
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
              <label htmlFor="isCastration">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Кастрация
                  </FormLabel>
                  <FormControlLabel
                    value={true}
                    control={<Checkbox defaultChecked />}
                    label="Да"
                    {...register("isCastration")}
                  />
                </FormControl>
              </label>
              <label htmlFor="isChipping">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Чипирование
                  </FormLabel>
                  <FormControlLabel
                    value={true}
                    control={<Checkbox defaultChecked />}
                    label="Да"
                    {...register("isChipping")}
                  />
                </FormControl>
              </label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
              <label htmlFor="isVaccination">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Вакцинация
                  </FormLabel>
                  <FormControlLabel
                    value={true}
                    control={<Checkbox defaultChecked />}
                    label="Да"
                    {...register("isVaccination")}
                  />
                </FormControl>
              </label>
              <label htmlFor="isPassport">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Наличие паспорта
                  </FormLabel>
                  <FormControlLabel
                    value={true}
                    control={<Checkbox defaultChecked />}
                    label="Да"
                    {...register("isPassport")}
                  />
                </FormControl>
              </label>
            </div>
            <div className="button-container">
              <Button variant="contained" type="submit">
                Добавить питомца
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
