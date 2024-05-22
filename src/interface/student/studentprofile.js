import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

function Profile() {
  const [initialValues, setInitialValues] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword , setOldPassword] = useState("");
  const [err, setError] = useState(null);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("id");

      try {
        const response = await axios.post(
          "http://localhost:8080/api/GetSingleUser",
          { userId: id }
        );

        // Check for a successful response
        if (response.status === 200) {
          const userData = response.data;
          setUser(userData);
          setUsername(userData.username);
          setEmail(userData.email);
          setInitialValues({
            username: userData.username,
            email: userData.email,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();

    // Check if any field has been changed
    const isChanged = Object.keys(initialValues).some(
      (key) => initialValues[key] !== eval(key)
    );

    if (!isChanged) {
      Swal.fire("Error", "No changes made", "error");
      return;
    }

    const id = localStorage.getItem("id");

    try {
      const res = await axios.put(
        "http://localhost:8080/api/user/update/" + id,
        {
          username: username,
          email: email,
        }
      );
      if (res.status >= 200 && res.status < 300) {
        Swal.fire("Success", "User updated successfully", "success");
      } else {
        Swal.fire("Error", "Failed to update user", "error");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      Swal.fire("Error", "Failed to update user", "error");
    }
  };

  return (
    <div className="container-fluid">
      <div className="bg-blue-700">
        <h1 className="m-5 p-10 text-center">My Profile</h1>
      </div>
      <Form onSubmit={handleChange}>
        <div className="row m-6 p-10">
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-evenly">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Profile;
