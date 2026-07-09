import Link from "next/link";
import scss from "./header.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { FaChevronUp } from "react-icons/fa";

const Header = () => {
  const { push } = useRouter();
  const [profile, setProfile] = useState<boolean>(false);
  const handleData = () => {
    push("/register");
    setIsRegister(true);
  };
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h3>WEB TV</h3>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/wishlist">WishList</Link>
            <Link href="/admin">Admin</Link>
          </nav>
          {isRegister ? (
            <div className={scss.profile1}>
              <img
                src="https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg"
                alt=""
              />
              <div className={scss.text}>
                <p>asanrustamov49</p>
                <button onClick={() => setProfile(true)}>
                  <FaChevronDown />
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => handleData()}>Sign Up</button>
          )}

          {profile ? (
            <div className={scss.profile}>
              <button className={scss.back} onClick={() => setProfile(false)}>
                <FaChevronUp />
              </button>
              <div className={scss.mainProfile}>
                <img
                  src="https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg"
                  alt=""
                />
                <div className={scss.text1}>
                  <h3>Asan Rustamov</h3>
                  <p>asanrustamov49@gmail.com</p>
                </div>
              </div>
              <div className={scss.link}>
                <Link style={{ color: "black" }} href="/profile">
                  <button onClick={() => setProfile(false)}>My Profile</button>
                </Link>
                <button className={scss.logout}>
                  <TbLogout />
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
