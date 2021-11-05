import "./style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../Global/useGlobal";

export default function Login() {
  const history = useHistory();
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const { setExibAlert, verificarVazio, setVerificarVazio, setToken } =
    useAuth();

  useEffect(() => {
    if (emailLogin || senhaLogin) {
      setVerificarVazio(false);
    }
  }, [emailLogin, senhaLogin, setVerificarVazio]);

  async function handleLogin() {
    if (!emailLogin) {
      return setVerificarVazio("email");
    }
    if (!senhaLogin) {
      return setVerificarVazio("senha");
    }

    const body = {
      email: emailLogin,
      senha: senhaLogin,
    };

    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setExibAlert({ data: "Email ou senha incorretos", typealert: "error" });

        setTimeout(() => {
          setExibAlert(false);
        }, 3000);
      } else {
        setExibAlert({
          data: `Seja bem vindo ${data.usuario.nome}`,
          typealert: "sucess",
        });

        setToken(data.token);

        history.push("/home");

        setTimeout(() => {
          setExibAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="Login">
      <div className="left">
        <img src="./assets/imagem-esquerda.png" alt="Banner de Login" />
      </div>
      <div className="right">
        <Box className="box-form_login">
          <Typography
            variant="caption"
            gutterBottom
<<<<<<< HEAD
            sx={{ alignSelf: "flex-start", fontSize: 16 }}
=======
            sx={{ alignSelf: "flex-start" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          >
            Bem vindo
          </Typography>
          <Typography
            variant="h5"
            className="title-login"
<<<<<<< HEAD
            sx={{ alignSelf: "flex-start", fontSize: 32 }}
=======
            sx={{ alignSelf: "flex-start" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          >
            Faça o login com sua conta
          </Typography>
          <TextField
            error={verificarVazio === "email"}
            helperText={
              verificarVazio === "email" && "O campo email deve ser preenchido."
            }
            className="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={emailLogin}
            onChange={({ target }) => setEmailLogin(target.value)}
<<<<<<< HEAD
            sx={{ marginBottom: "1rem" }}
=======
            sx={{ width: "30rem", marginBottom: "1rem" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          />
          <TextField
            error={verificarVazio === "senha"}
            helperText={
              verificarVazio === "senha" && "A senha deve ser informada."
            }
            type="password"
            className="outlined-basic"
            label="Senha"
            variant="outlined"
            value={senhaLogin}
            onChange={({ target }) => setSenhaLogin(target.value)}
<<<<<<< HEAD
            sx={{ marginBottom: "4.5rem" }}
=======
            sx={{ width: "30rem", marginBottom: "4.5rem" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          />
          <Button
            className="login-btn"
            variant="contained"
            onClick={handleLogin}
<<<<<<< HEAD
            sx={{
              width: 475,
              minHeight: 50,
              marginBottom: "6rem",
              fontSize: 16,
              borderRadius: "0.8rem",
            }}
=======
            sx={{ width: "30rem", marginBottom: "6rem" }}
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
          >
            Login
          </Button>

<<<<<<< HEAD
          <Typography variant="body2" sx={{ fontSize: 16 }}>
=======
          <Typography variant="body2" gutterBottom>
>>>>>>> 725c4a0cce420f66a7e303623d770878e80e7110
            Não tem cadastro? <Link to="/sign-up">Clique aqui!</Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
}
