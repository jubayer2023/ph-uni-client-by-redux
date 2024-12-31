import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });

  const onSubmit = async (data: any) => {
    const userInfo = {
      id: data?.userId,
      password: data?.password,
    };
    // console.log(userInfo);
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data?.accessToken);
    console.log(user);
    dispatch(setUser({ user: user, token: res.data?.accessToken }));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        height: "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "100px",
      }}
    >
      <h3>This is Login page !!</h3>
      <div style={{ margin: "30px 0px" }}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div style={{ margin: "30px 0px" }}>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")} />
      </div>

      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
