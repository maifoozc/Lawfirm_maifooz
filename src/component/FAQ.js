import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ color: "#fff", backgroundColor: "#111111" }}>
      <div style={{ padding: "2rem 10rem" }}>
        <Typography variant="h3" sx={{ textAlign: "left" }}>
          FAQ
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ fontSize: "1.12rem", color: "#4f4f4fff", textAlign: "left" }}
          >
            Amet minim mollit non deserunt ullamco est sit
            <br /> aliqua dolor do amet sint.
          </Typography>
          <div style={{ textAlign: "left", maxWidth: "37rem" }}>
            <Typography sx={{ fontWeight: "600" }}>
              Do I need a personal injury report?
            </Typography>
            <Typography
              sx={{
                fontSize: "1.12rem",
                color: "#4f4f4fff",
                wordWrap: "break-word",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                color: "#fff",
                backgroundColor: "#111111",
                border: "solid 1px  #fff ",
                borderBottom: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon style={{ color: "yellow" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ padding: 0 }}
              >
                <Typography>How much is my case worth?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{
                color: "#fff",
                backgroundColor: "#111111",
                border: "solid 1px  #fff ",
                borderBottom: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon style={{ color: "yellow" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ padding: 0 }}
              >
                <Typography>
                  What should I do right after car accidect
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{
                color: "#fff",
                backgroundColor: "#111111",
                border: "solid 1px  #fff ",
                borderBottom: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon style={{ color: "yellow" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ padding: 0 }}
              >
                <Typography>How much is my case worth?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div
          style={{
            margin: "10rem",
            padding: "5rem",
            backgroundColor: "rgba(71, 71, 71, 0.50)",
          }}
        >
          <Typography variant="h3">Subscribe Our Newsletter</Typography>
          <div>
            <TextField
              placeholder="Name:"
              size="small"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "1rem 0 0 1rem",
                margin: "1rem",
              }}
            />
            <TextField
              placeholder="Enter your Email"
              size="small"
              sx={{
                backgroundColor: "#fff",
                color: "#000",

                margin: "1rem",
              }}
            />
            <Button
              sx={{
                backgroundColor: "yellow",
                color: "#000",
                margin: "1rem",
                borderRadius: "0 1rem  1rem 0",
              }}
            >
              SEND
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
