import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack"; //จัดเลเอาร์ 1 มิติ Default แนวตั้ง
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function App() {
  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "10vh",
        border: "1px solid #eee",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        borderRadius: "4px",
      }}
    >
      <Stack spacing={3} useFlexGap>
        <CssBaseline />
        {/* Reset CSS */}
        <TextField
          required
          type="email"
          label="Email"
          placeholder="your@email.com"
          variant="outlined"
          fullWidth
          autoFocus
          id="email"
          name="email"
          autoComplete="email"
        ></TextField>
        <TextField
          type="password"
          label="Password"
          placeholder="******"
          name="password"
          fullWidth
          id="password"
          // autoComplete='current-password'
          required
          variant="filled"
        ></TextField>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          // sx={{
          //   ma,
          // }}
        />
        <Button>Login</Button>
      </Stack>
    </Box>
  );
}

export default App;
