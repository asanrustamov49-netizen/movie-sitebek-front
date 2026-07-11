"use client";
import { useProfile } from "@/hooks/useProfile";
import scss from "./profile.module.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const Profile = () => {
  const { data: user, isLoading, error } = useProfile();

  console.log("USER:", user);
  console.log("ERROR:", error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>Profile</h1>
          <div className={scss.mainProfile}>
            <div className={scss.avatar}>
              <div className={scss.img}></div>
              <div className={scss.mainAvatar}>
                <img src={user?.avatar} alt="" />
                <div className={scss.text}>
                  <h3>Your Photo</h3>
                  <p>Your photo will be displayed here</p>
                </div>
              </div>
            </div>
            <div className={scss.info}>
              <h2>Personal Information</h2>
              <div className={scss.firstName}>
                <h3>FirstName</h3>
                <h4>
                  <FaRegUserCircle />
                  {user?.name}
                </h4>
              </div>
              <div className={scss.lastName}>
                <h3>LastName</h3>
                <h4>
                  <FaRegUserCircle />
                  {user?.name}
                </h4>
              </div>
              <div className={scss.email}>
                <h3>Email address</h3>
                <h4>
                  <MdOutlineMailOutline />
                  {user?.email}
                </h4>
              </div>
              <div className={scss.logout}>
                <div className={scss.mainLogout}>
                  <h3>Log out of all devices</h3>
                  <h5>
                    Log out of all other active sessions on other devices
                    besides <br />
                    this one
                  </h5>
                </div>
                <button onClick={() => logout()}>
                  <TbLogout />
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
