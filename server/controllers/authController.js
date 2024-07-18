const bcrypt = require("bcrypt");
const generateTokens = require("../utils/authUtils");
const UserService = require("../services/userServices");

exports.registration = async (req, res) => {
  try {
    const { name, email, password, lastName } = req.body;
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }

    const userInDb = await UserService.getUserByEmail(email);
    if (userInDb) {
      res
        .status(400)
        .json({ message: "Такой пользователь уже зарегестрирован" });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await UserService.createUser({
      name,
      lastName,
      roleId: 1,
      email,
      password: hashPassword,
    });

    const { accessToken, refreshToken } = generateTokens({ user });

    if (user) {
      res
        .status(201)
        .cookie("refresh", refreshToken, { httpOnly: true })
        .json({ message: "success", user, accessToken });
      return;
    }

    res.status(400).json({ message: "Что-то пошло не так" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.authorization = async (req, res) => {
  try {
    const { email, password } = req.body;
    // проверка на пустые поля
    if (email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }
    const user = await UserService.getUserByEmail(email);

    if (user) {
      const isCompare = await bcrypt.compare(password, user.password);
      if (isCompare) {
        delete user.dataValues.password;

        const { accessToken, refreshToken } = generateTokens({ user });
        res
          .status(200)
          .cookie("refresh", refreshToken, { httpOnly: true })
          .json({ message: "success", accessToken, user });
        return;
      }
      res.status(400).json({ message: "email или пароль не совпадают" });
      return;
    }

    res.status(400).json({ message: "email или пароль не совпадают" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.logout = (req, res) => {
  res.locals.user = undefined;
  res.status(200).clearCookie("refresh").json({ message: "success" });
};

exports.update = async (req, res) => {
  try {
    const { user } = res.locals;
    console.log(user);
    const { name, lastName } = req.body;
    console.log({ name, lastName });
    if (!name || !lastName) {
      res.status(400).json({ message: "Необходимо заполнить все поля" });
      return;
    }
    if (req.file) {
      const { filename } = req.file;
      const updatedUser = await UserService.updateUser(user.id, {
        name,
        lastName,
        img: `/img/${filename}`,
      });
      if (updatedUser) {
        const getUser = await UserService.getUserById(user.id);
        res.status(200).json({ message: "success", user: getUser });
		return;
      }
    }
    const updatedUser = await UserService.updateUser(user.id, {
      name,
      lastName,
    });
    if (updatedUser) {
      const getUser = await UserService.getUserById(user.id);
	  delete getUser.dataValues.password
      res.status(200).json({ message: "success", user: getUser });
    } else {
      res.status(404).json({ message: "Пользователь не найден" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
