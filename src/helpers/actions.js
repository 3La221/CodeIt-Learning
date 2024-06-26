import Cookies from 'js-cookie';

// function useUserActions() {
//   const baseURL = "http://localhost:8000/api";

//   return {
//     login,
//     register,
//     logout,
//   };

//   // Login the user
//   function login(data) {
//     return axios.post(`${baseURL}/auth/login/`, data).then((res) => {
//       // Registering the account and tokens in the store
//       setUserData(res.data);
//       navigate("/");
//     });
//   }

//   // Register the user
//   function register(data) {
//     return axios.post(`${baseURL}/auth/register/`, data).then((res) => {
//       // Registering the account and tokens in the store
//       setUserData(res.data);
//       navigate("/");
//     });
//   }

  // Logout the user
  function logout(navigate) {
    localStorage.removeItem("auth");
    Cookies.remove('formation');
    navigate("/login");
  }
  
// }

// Get the user
function getUser() {
  const auth = JSON.parse(localStorage.getItem("auth")) || null;
  if (auth) {
    return auth.user_id;
  } else {
    return null;
  }
}

// Get the access token
// function getAccessToken() {
//   const auth = JSON.parse(localStorage.getItem("auth"));
//   return auth.access;
// }

// // Get the refresh token
// function getRefreshToken() {
//   const auth = JSON.parse(localStorage.getItem("auth"));
//   return auth.refresh;
// }

// // Set the access, token and user property
// function setUserData(data) {
//   localStorage.setItem(
//     "auth",
//     JSON.stringify({
//       access: data.access,
//       refresh: data.refresh,
//       user: data.user,
//     })
//   );
// }

export { getUser   , logout};