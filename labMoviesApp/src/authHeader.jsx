import React, { useContext } from "react";
import { AuthContext } from "./contexts/authAPIContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

const BaseAuthHeader = () => {
  const context = useContext(AuthContext);

  return context.isAuthenticated ? (
    <h1
      style={{
        marginTop: 120,
        color: "rgb(3, 37, 65)",
        textAlign: "center",
      }}
    >
      Welcome {context.email}!{" "}
      <button onClick={() => context.signout()}>Sign out</button>
    </h1>
  ) : (
    <h3
      style={{
        marginTop: 120,
        color: "rgb(3, 37, 65)",
        textAlign: "center",
      }}
    >
      You are not logged in{" "}
      <Link to={`/login`} style={{ textDecoration: "none" }}>
        <Button variant="contained" size="small" color="secondary">
          Login
        </Button>
      </Link>
      <hr />
    </h3>
  );
};

export default withRouter(BaseAuthHeader);
