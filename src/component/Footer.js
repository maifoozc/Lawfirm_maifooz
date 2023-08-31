import { Typography } from "@mui/material";
import Logo from "../assets/Logo.png";
import Social from "../assets/Social.png";

export default function Footer() {
  return (
    <div style={{ color: "#fff", backgroundColor: "#111111" }}>
      <div style={{ display:'flex', justifyContent:"space-between", padding:'1rem 10rem'}}>
        <img src={Logo} alt="logo" />
        <div style={{ display:'flex', justifyContent:"space-between",gap:'2rem'}}> 
        <Typography>Home</Typography>
        <Typography>Attorneys</Typography>
        <Typography>Practice Areas</Typography>
        <Typography>About Us</Typography>
        </div>
        <div>
        <img src={Social} alt="logo" />
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:"space-between", padding:'2rem 30rem'}}>
      <Typography>© 2020 Acme. All right reserved.</Typography>
      <Typography>Privacy Policy</Typography>
      <Typography>Terms of Service</Typography>
      </div>
    </div>
  );
}
