import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, getIdTokenClaims } = useAuth0();

  if (!isAuthenticated) {
  loginWithRedirect()

  } else {
    getIdTokenClaims().then(res => {
      localStorage.setItem("idToken", res.__raw)
      localStorage.setItem("isAuthenticated", isAuthenticated)
    })
  }
};

export default Login;