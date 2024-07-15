"use client";
import { RootState, useAppDispatch } from "@/src/windows/app/store/store";
import { logoutThunk, refreshUser } from "@/src/windows/entities/users/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import styles from "./NavBar.module.css";

const NavBar = (): JSX.Element => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    void dispatch(refreshUser());
  }, [dispatch]);

  const onHandleLogout = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    void dispatch(logoutThunk());
    router.push("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!loading) {
    return (
      <div className={styles.navBar}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          <Link href={"/"}>Домой</Link>
          <Link href={"/search"}>Поиск</Link>
          {/* <Link href={'/about'}>About Us</Link>
					<Link href={'/contact'}>Contact</Link>
					<Link href={'/messages'}>Messages</Link> */}
          {user ? (
            <>
              <p>Привет {user.name}</p>
              <Link href={"/profile"}>Профиль</Link>
              <button
                type="button"
                onClick={onHandleLogout}
                className={styles.logoutButton}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={"/sign-up"}>Регистрация</Link>
              <Link href={"/sign-in"}>Авторизация</Link>
            </>
          )}
        </div>
      </div>
    );
  } else return <Loader />;
};

export default NavBar;
