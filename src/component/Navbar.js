import Logo from "../assets/Logo.png";
import "./Navbar.scss";
import { Button, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "#111111", color: "#fff" }}>
      <div className="navbar">
        <img src={Logo} alt="logo" />

        <div className="menu">
          <Typography>Home</Typography>
          <Typography>Attorneys</Typography>
          <Typography>Practice Areas</Typography>
          <Typography>About Us</Typography>
        </div>
        <Button
          variant="outlined"
          sx={{ textTransform: "none", color: "#fff", border: 'solid 1px #fff' }}
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
}
