import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData?.image);
  console.log(user?.username);
  return (
    <>
      <Container>
        <Row>
          <Col col="6" className="mb-5 mt-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-center">
                <img
                  src={userData?.image}
                  style={{ width: "185px" }}
                  alt="logo"
                />
                <h4 className="mt-1">We are The Lotus Team</h4>
              </div>
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">
                  Hi..{" "}
                  {user?.username !== undefined
                    ? user?.username
                    : userData?.username}
                  , Welcome Abroad!
                </h4>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet, emailId:{" "}
                  <b>{user?.email !== undefined ? user?.email : userData?.email}</b>{" "}
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
