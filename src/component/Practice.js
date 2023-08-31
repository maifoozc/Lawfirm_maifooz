import {
  Box,
  Card,
  CardMedia,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
import "./Practice.scss";
export default function Practice() {
  const imageURL_1 =
    "https://s3-alpha-sig.figma.com/img/c5e0/6b00/7c0b32a7459f3f93e948c826fb8285fa?Expires=1694390400&Signature=PEVcxG98wp16qY~~9mRy~dsfS2ge4MOz-bEk60xdyC5bYcA9WahvYKBqzHI3nMTvkMW-9kwEh5w30ROJ6ka09ZXugS8P0Oorea5qRHoaVUHLmJ~Xejmx-AlvWB9~mXkKJRV4CXQbwySenmXm-gs4a6Ivl7NpSpt0IhrePdU~NkhxMExbPazY5KyCWfR0oNbhKQs6DzsUtuWNdXcFrkT-9AixWxE1WC-I7z7ffRgyU37puPEibnCdQi2MFvupzcdrssorbJNHTvt9Ug7SyE8QI~fbUtiw-aL39Jg931xYAFbZERX09svrHDiuGj1XuCYBYF0ctqlqzC4m-V4PjrxqbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const imageURL_2 =
    "https://s3-alpha-sig.figma.com/img/a84e/eb93/e84ba9f312f91841a004e8392d9027e5?Expires=1694390400&Signature=nQanrLPyj2vgR9zgp-uEdiP~PaqPdj8LIKfaSGeQ7MzHO95xXa1Wc4yWoOhbLtqb4gbgU7sRj89ZzB0dwJXy~8UxwTdiGQfKkqnuTr9Cwj2c8uYp17ncq9PQrEpsusX3YP7KDpQ55DM3-LC~CxFVt2TQ27SU8YvG1AOKI86jJRzsybLxv1ohnZYiSIlAsoadZKailv0C7A9tlVuhDMQkRyWPgbRgB3otcwy1-B7ZI1UoaSCb7pfdCtD-xhXRgucH36fd79wRhGSeg45lbz4h3dZDDBzm-i~uLuQNtSVTPi3S2uUfg0eyPb~MZwcgZ2sMWNT1jO3YbVml2vt7HYbwCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const imageURL_3 =
    "https://s3-alpha-sig.figma.com/img/0134/94ae/20fe77e2ba4511c0eac9a6a8e2e442e9?Expires=1694390400&Signature=mv56-ajmwORJky22UjHLGTFXONg92jM8e6S2JuZov651mgQlUSJ5k4ZMq7M~EQ83t6Cpq3F3QclWWP-Tksing5Pn1azZfkodch-jYcBS-P-HrZkhVfRV9INqD9NVbnVFnqq~8nuxRgLfynyIzV3d39Pdcq6TnVjESnZh1AmDQ45S8Q-ZpW5MXCn7Jmwq2qq1pJlBjt6QUIvv2IKnxRnGPqzb-93frF7cbzMffMuEwzvm711NNylDlvbp~I3Lb6ww9~0h09HfTNA1Tuz5EfJrWJRIQzyt4Xo0DjK36cSyhHCHAOrTJGLF8GG5nY32wJ3OiofSs7NwJ0LEVVL0z79rhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  const imageURL_4 =
    "https://s3-alpha-sig.figma.com/img/967e/a809/6e48ac723c88ed39751352f5c9436c2a?Expires=1694390400&Signature=BZnGkXubK-VTEDGh2JUEPh3XD7gi-brnAwBduWfW42e-5toNvc79evdx-AGfWZf-7-xpCB-NgacHyFBnztFPu7yiLV57HmZBV~3avQxlyVM6MFc433K28JrgaZC3Ya2CAfjxdBnVRgNL08B8N2kjidrO~WFb6uq9IP3pmNVvVQTsoElxX2nTP8Mbv3DjWmb7maI8PQPDdMuaoh-SacT0SQZyoixT~tHKPFqhLQX1MsHVs0zqsqlcZvEMw4fSftc2ujsI6j6HFa1l3E3voXlrcMELNzN-w9XGfadwnyS7OIb63OHbWVQc1C~z2jVTMPruRJtDrqXcPwmOhJ4gADOWZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const imageURL_5 =
    "https://s3-alpha-sig.figma.com/img/67f6/5c6c/48e8eefdf399cab04f83a10d965770f1?Expires=1694390400&Signature=OGGF72SPGnBIMTyLQo0Y23t0PxL5yULJPW~0DcXzdph2fcFgvHB53VFlKer2dfUtzR~P4BXguz9j~ORqLESs-8PLkX5BnxDj7hvFl1jnrVQtvFpd~ufy6olv6izBM9B9dS~SfWdx0nyYGjDTmBp~UEXHUGWyRHmzqVs8EkfcuKI1qKMTKA0rkOSzlnNZbXKapsw0xCKsqXANDa7jibrrWggqqQOZuvosso6Yv7DHUk-EsqLMX~A3Rl3VAN77mDLtMYuHa99atIuzlFhbczsismT5ts3LpIFLlOyZiZ2exe1~mR-UR3zj0KtPYUluqOdM-WpZtde2c4eX4wjSldL-KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const imageURL_6 =
    "https://s3-alpha-sig.figma.com/img/68d0/8df3/8947e8d751a269f4d5965ea6d3152054?Expires=1694390400&Signature=c6t4ktKiD4XnMtRhSGS9koBeOcG2e1vH52IxLqtbTq3EuKtzBORSAxXbidbpcFYcy2H4r0K88BCWGqfWQz9A2aG~QfZfw9FzDeNvFmHscGsdymE7354oQeXS4KHlXMaIOe~DNPi3j4RDMFUDJXIP4Q0a3tXs7JotlwDeZ3sehV1~d5QAkTbmzylLCGZ0AFcq6Au~SCusxYZPk8e21mA5OD-g5KynOvOk42t767g2fMlnFMqeOYtoate2j17V9BBDk0UuRfnm0gAN4wgZDrx52-tJeq7R9KaVMV2txBZTriYOvQUrnutSske~jWh6pCAq-JRGkcax4Gszeo8X83hnxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  return (
    <div style={{ color: "#fff", backgroundColor: "#111111", paddingTop:'4rem' }}>
      <Typography variant="h3">Area of Practices</Typography>

      <Box sx={{ flexGrow: 1, padding: "1rem 10rem" }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <ListItem>
              <Box
                sx={{
                  backgroundImage: `url(${imageURL_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "2rem",
                  width: "100%",
                  height: "13rem",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "45%",
                  }}
                >
                  BUSINESS LAW
                </Typography>
              </Box>
            </ListItem>
          </Grid>
          <Grid xs={4}>
            <ListItem>
              <Box
                sx={{
                  backgroundImage: `url(${imageURL_1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "2rem",
                  width: "100%",
                  height: "13rem",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "33%",
                  }}
                >
                  PARTNERSHIP LAW
                </Typography>
              </Box>
            </ListItem>
          </Grid>
          <Grid xs={4}>
            <ListItem>
              <Box
                sx={{
                  backgroundImage: `url(${imageURL_3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "2rem",
                  width: "100%",
                  height: "13rem",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "33%",
                  }}
                >
                  REAL ESTATE LAW
                </Typography>
              </Box>
            </ListItem>
          </Grid>
          <Grid xs={8}>
            <ListItem>
              <Box
                sx={{
                  backgroundImage: `url(${imageURL_4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "2rem",
                  width: "100%",
                  height: "13rem",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "45%",
                  }}
                >
                  BUSINESS LAW
                </Typography>
              </Box>
            </ListItem>
          </Grid>
          <Grid xs={8}>
            <ListItem>
              <Box
                sx={{
                  backgroundImage: `url(${imageURL_5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "2rem",
                  width: "100%",
                  height: "13rem",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "45%",
                  }}
                >
                  LANDLORD DISPUTES
                </Typography>
              </Box>
            </ListItem>
          </Grid>
          <Grid xs={4}>
            <ListItem>
              <Box
                sx={{
                  backgroundImage: `url(${imageURL_6})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "2rem",
                  width: "100%",
                  height: "13rem",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "33%",
                  }}
                >
               ELDER ABUSE
                </Typography>
              </Box>
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
