import { Box, Button, Card, TextField, Typography } from "@mui/material";
import FlexContainerStyled from "../components/shared/FlexContainerStyled";

function Login() {
  return (
    <FlexContainerStyled>
      <Card
        variant="outlined"
        sx={{
          width: "60%",
          borderRadius: 2,
          height: "300px",
          display: "flex",
        }}
      >
        <Box display="flex" alignItems="center">
          <Box
            maxWidth="50%"
            padding="24px"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            color="#FFF"
            bgcolor="#1D9BF9"
          >
            <Typography variant="h4">Growtwitter</Typography>
            <Typography marginBottom="12px">
              Trabalho final do bloco intermediário
            </Typography>
            <Typography variant="body2">
              O Growtwitter é a plataforma definitiva para todos os apaixonados
              por redes sociais que buscam uma experiência familiar e poderosa,
              semelhante ao Twitter, mas com um toque único. Seja parte desta
              comunidade que valoriza a liberdade de expressão, a conexão com
              pessoas de todo o mundo e a disseminação de ideias.
            </Typography>
          </Box>
          <Box padding="24px">
            <Typography variant="h6">Entrar no Growtwitter</Typography>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "12px" }}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "12px" }}
            />
            <Button variant="contained" color="primary" fullWidth>
              Entrar
            </Button>
          </Box>
        </Box>
      </Card>
    </FlexContainerStyled>
  );
}

export default Login;
