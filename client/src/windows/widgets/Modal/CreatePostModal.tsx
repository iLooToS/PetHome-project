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
import { PostCreate } from "../../entities/shelters/shelterPosts/types/postTypes";
import { createPostThunk } from "../../entities/shelters/shelterPosts/postSlice";

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
  postName: string().nullable().trim().required("Обязательно для заполнения"),
  text: string()
    .nullable()
    .trim()
    .required("Все поля обязательны для заполнения"),
});

interface ShelterPageProps {
  shelterId: number;
}

export default function CreatePostModal({ shelterId }: ShelterPageProps) {
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

  const onHandleSubmit = async (post: PostCreate): Promise<void> => {
    post.shelterId = shelterId;
    post.photo = photo && photo[0];
    console.log(post);

    if (!post.photo) {
      setError((prev) => !prev);
      return;
    }
    const formData = new FormData();
    for (const key in post) {
      formData.append(key, post[key]);
    }

    void dispatch(createPostThunk(formData));
    handleClose();
    reset();
  };

  return (
    <div>
      <button onClick={handleOpen}>Добавить пост</button>
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
                className="w-80"
                label="Название поста"
                variant="outlined"
                type="postName"
                {...register("postName")}
              />
              <TextField
                className="w-80"
                label="Текст"
                variant="outlined"
                multiline
                rows={5}
                type="text"
                {...register("text")}
              />
              <span className="w-80 text-red-600">{errors.text?.message}</span>
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
                {photo && photo[0]
                  ? `${photo[0].name}`
                  : error
                  ? "Изображение обязательно"
                  : "Добавить изображение"}
                <VisuallyHiddenInput type="file" />
              </Button>
              <Button variant="contained" type="submit" color="success">
                Опубликовать пост
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
