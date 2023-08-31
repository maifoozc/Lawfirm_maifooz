import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Hero from "../assets/Hero.png";
import "./HeroPage.scss";
import EmailIcon from "@mui/icons-material/Email";

export default function HeroPage() {
  return (
    <div className="hero">
      <div className="hero_data">
        <div style={{ textAlign: "left" }}>
          <Typography
            sx={{ fontSize: "4rem", fontWeight: "600", padding: "2rem 0" }}
          >
            You don't have to <br />
            Fight them Alone.
          </Typography>
          <Typography sx={{ width: "35rem", textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </Typography>
          <TextField
            size="small"
            placeholder="Enter your email address"
            className="Hero_Page"
            sx={{ marginTop: "1rem", padding: 0 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start" sx={{ marginRight: "-1rem" }}>
                  <Button
                    sx={{
                      borderRadius: "2rem",
                      backgroundColor: "#E3B748",
                      color: "#000",
                      textTransform: "none",
                    }}
                  >
                    Let's Talk
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <img src={Hero} alt="hero image" />
      </div>
    </div>
  );
}
