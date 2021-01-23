import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Profile = ({ myProfile, children, handleName }) => {
  return (
    <div>
      {myProfile.map((el, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={children} />
          <Card.Body>
            <Card.Title>{el.FullName}</Card.Title>

            <Card.Text>{el.Bio}</Card.Text>
            <Card.Text>{el.Profession}</Card.Text>
            <Button variant="primary" onClick={() => handleName(el.FullName)}>
              Display FulName
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
Profile.propTypes = {
  myProfile: PropTypes.array,
  handleName: PropTypes.func,
};
