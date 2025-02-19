import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const UserForm = () => {

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    id: Date.now(),
  });
  const [errors, setErrors] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (Object.values(userData).some((value) => value !== "")) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [userData]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!userData.name) newErrors.name = "Name is required";
    if (!userData.address) newErrors.address = "Address is required";
    if (!userData.email) newErrors.email = "Email is required";
    if (!userData.phone) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    localStorage.setItem("userDetail", JSON.stringify(userData));
    setIsSaved(true);
    alert("Data saved!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <TextField
        name="name"
        label="Name"    
        value={userData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        name="address"
        label="Address"
        value={userData.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.address}
        helperText={errors.address}
      />
      <TextField
        name="email"
        label="Email"
        value={userData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        name="phone"
        label="Phone"
        value={userData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.phone}
        helperText={errors.phone}
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        Save
      </Button>
      {isSaved && <Typography sx={{ mt: 2 }}>User ID: {userData.id}</Typography>}
    </Container>
  );
};

export default UserForm;
