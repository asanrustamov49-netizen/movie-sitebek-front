"use client";
import { useRouter } from "next/navigation";
import scss from "./register.module.scss";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useRegister } from "@/hooks/useRegister";

interface IForm {
  email: string;
  password: string;
  avatar: string;
  name: string;
}

const Register = () => {
  const { register, handleSubmit, reset } = useForm<IForm>();
  const { mutate: createAccount } = useRegister();
  const { push } = useRouter();

  const handleData = (data: IForm) => {
    createAccount(data);
    reset();
  };
  return (
    <div className={scss.container}>
      {/* <img
        src="https://w0.peakpx.com/wallpaper/439/177/HD-wallpaper-forest-from-above-green-mountain-mountains-drone.jpg"
        alt=""
      /> */}
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.register}>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit(handleData)} className={scss.form}>
              <input {...register("email")} type="text" placeholder="Email" />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
              />
              <input {...register("name")} type="text" placeholder="Username" />
              <input {...register("avatar")} type="text" placeholder="Avatar" />

              <p>forgot password?</p>
              <button type="submit">Sign Up</button>
            </form>
            <div className={scss.login}>
              <h3>Sign In with</h3>
              <div className={scss.sign} onClick={() => push("/login")}>
                <span className={scss.s1}>
                  <FaGoogle />
                </span>
                <span className={scss.s2}>
                  <FaFacebook />
                </span>
                <span className={scss.s3}>
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
