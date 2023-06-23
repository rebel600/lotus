import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/Welcome";
import lotusIcon from "../../assets/img/lotus.png";
import { Button, Col, Container, Row } from "react-bootstrap";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    // Perform your signup logic here
    navigate("/");
    console.log(image);
  };
  return (
    <>
      <Container className="my-5 gradient-form">
        <Row>
          <Col col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src={lotusIcon} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
              </div>
              <p>Please login to your account</p>
              <input
                className="mb-4"
                label="Username"
                placeholder="Username"
                id="form1"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="mb-4"
                label="Email address"
                placeholder="Email address"
                id="form2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="mb-4"
                placeholder="Password"
                label="Password"
                id="form3"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                className="mb-4"
                label="Image"
                id="form4"
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <Button
                  onClick={() => handleLogin()}
                  className="mb-4 w-100 gradient-custom-2"
                >
                  Register
                </Button>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Already have an account?</p>
                <Button outline="true" className="mx-2 gradient-custom-2" 
                onClick={()=> navigate("/")}
                >
                  Login
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

export default Signup;
