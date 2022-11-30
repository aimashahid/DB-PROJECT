import React, { useContext, useState } from "react";
import {
  Link,
  Typography,
  Container,
  Box,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utilities/localStorage";
import { login } from "../api/backend";
import AuthContext from "../context/AuthContext";

function AuthForm({ title, onSubmit, error, children }) {
  const navigate = useNavigate();

  const routeChange = () =>{ 
    let path = "/HomePage"; 
    navigate(path);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    onSubmit(email);

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={error}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={error}
            value={password}
            onChange={(event) => setPassword(event.target.value)}

          />
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={routeChange}
          >
            {title}
          </Button>
          
          {children}
        </Box>
      </Box>
    </Container>
  );
}

function LoginPage() {
  const [isError, setError] = useState(false);
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(AuthContext);

  const signIn = (email, password) => {
    login(email, password)
      .then((res) => {
        const {
          data: { token },
        } = res;
        setToken(token);
        setAuthenticated(true);
        navigate("/", { replace: true });
      })
      .catch(() => {
        setError(true);
      });
  };

  

  return (
    <AuthForm onSubmit={signIn} title="Log In" error={isError}>
      <Typography variant="body2" color="text.secondary" align="center">
        Don't have an account?{" "}
        <Link href="/signup" variant="body2" color="inherit">
          Sign Up
        </Link>
      </Typography>
    </AuthForm>
  );
}

export default LoginPage;