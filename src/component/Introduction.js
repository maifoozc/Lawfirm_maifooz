import { Button, Card, Typography } from "@mui/material";
import Gift from "../assets/Gift.png";
import "./Introduction.scss";
export default function Introduction() {
  return (
    <div style={{ color: "#fff", backgroundColor: "#111111" }}>
      <div className="intro">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "3rem" }}>
            Let's Introduce
            <br />
            Ourself
          </Typography>
          <div className="vertical-line"></div>
          <div className="criminal_class">
            <Typography sx={{ fontSize: "2rem" }}>Criminal Lawyer</Typography>
            <Typography>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit
              Exercitation.
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <Typography variant="h3">Why Choose us?</Typography>
        <div className="card-section">
          <Card
            className="card"
            sx={{ color: "#fff", backgroundColor: "#111111" }}
          >
            <img src={Gift} alt="" gift className="card-img" />
            <Typography className="card-head" variant="h6">
              98% Success Rate
            </Typography>
            <Typography sx={{ wordWrap: "break-word", fontSize: "0.8rem" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>

            <Button
              className="card_btn"
              variant="outlined"
              sx={{
                color: "#111111",
                backgroundColor: "#e3b748",
                textTransform: "none",
                marginTop: "0.5rem",
                borderRadius: "2rem",
                width: "8rem",
              }}
            >
              Read More
            </Button>
          </Card>

          <Card
            className="card"
            sx={{ color: "#fff", backgroundColor: "#111111" }}
          >
            <img src={Gift} alt="" gift className="card-img" />
            <Typography className="card-head" variant="h6">
              100% Success Rate
            </Typography>
            <Typography sx={{ wordWrap: "break-word", fontSize: "0.8rem" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <Button
              className="card_btn"
              variant="outlined"
              sx={{
                color: "#111111",
                backgroundColor: "#e3b748",
                textTransform: "none",
                marginTop: "0.5rem",
                borderRadius: "2rem",
                width: "8rem",
              }}
            >
              Read More
            </Button>
          </Card>

          <Card
            className="card"
            sx={{ color: "#fff", backgroundColor: "#111111" }}
          >
            <img src={Gift} alt="" gift className="card-img" />
            <Typography className="card-head" variant="h6">
              100% Success Rate
            </Typography>
            <Typography sx={{ wordWrap: "break-word", fontSize: "0.8rem" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <Button
              className="card_btn"
              variant="outlined"
              sx={{
                color: "#111111",
                backgroundColor: "#e3b748",
                textTransform: "none",
                marginTop: "0.5rem",
                borderRadius: "2rem",
                width: "8rem",
              }}
            >
              Read More
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
