import Auth from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/Welcome";
import lotusIcon from "../../assets/img/lotus.png";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { Button, Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform your login logic here
    const data = {
      username,
      password,
    };

    if (username && password !== " ") {
      Auth.login(data)
        .then((res) => {
          toast.info(res?.data?.message, { autoClose: 1500 });
          localStorage.setItem("userData", JSON.stringify(res?.data?.user));
          updateUser(res?.data?.user);
          navigate("/home");
        })
        .catch((err) =>
          toast.error(err?.response?.data?.message, { autoClose: 1500 })
        );
    } else {
      toast.info("Please fill the required fields", { autoClose: 1500 });
    }
  };

  return (
    <>
      <ToastContainer />
      <Container className="my-5 gradient-form">
        <Row>
          <Col col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src={lotusIcon} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
              </div>
              <p>Please login to your account</p>
              <form onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control mb-4"
                    label="Username"
                    placeholder="John Doe"
                    id="form1"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                   <label htmlFor="form1" className="form-label">
                    Username
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control mb-4"
                    placeholder="Admin@123"
                    id="form2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="form2" className="form-label">
                    Password
                  </label>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>

                <div className="text-center pt-1 mb-5 pb-1">
                  <Button
                    type="submit"
                    className="mb-4 w-100 gradient-custom-2"
                  >
                    Sign in
                  </Button>
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
              </form>
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <Button
                  outline="true"
                  className="mx-2 gradient-custom-2"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </div>
            </div>
          </Col>

          <Col col="6" className="mb-5">
            <Welcome />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
