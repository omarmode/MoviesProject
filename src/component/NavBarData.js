import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../images/logo.avif";

const NavBarData = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo}></img>
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <form className="search-form">
                <input
                  onChange={(e) => onSearch(e.target.value)}
                  type="search"
                  name="search"
                  className="form-control"
                  placeholder="ابحث"
                ></input>
              </form>
              <div></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavBarData;
