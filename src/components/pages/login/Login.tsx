"use client";
import { useRouter } from "next/navigation";
import scss from "./login.module.scss";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, reset } = useForm<IForm>();
  const { push } = useRouter();
  const { mutate: login } = useLogin();

  const handleData = (data: IForm) => {
    login(data);
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
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(handleData)} className={scss.form}>
              <input
                {...register("email")}
                type="text"
                placeholder="Email or username"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
              />
              <p>forgot password?</p>
              <button type="submit">Sign In</button>
            </form>
            <div className={scss.login}>
              <h3>Sign Up with</h3>
              <div className={scss.sign} onClick={() => push("/register")}>
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

export default Login;
