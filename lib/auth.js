import useCurrentUser from "../lib/user/hooks";

const baseUrl = "https://kryptoalert.herokuapp.com";
const localUrl = "http://localhost:8000";

const checkSession = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/session/valid`, {
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// const Logout = async () => {
//   try {
//     const { data, mutate } = useCurrentUser();
//     console.log("logout", "data");
//     const response = await fetch(`${baseUrl}/api/v1/logout`, {
//       credentials: "include",
//     });
//     mutate({ user: null });
//     mutate({ token: null });
//     const res = await response.json();
//   } catch (err) {
//     console.log("qsq", err);
//   }
// };

export { checkSession };
// export { checkSession, Logout };
