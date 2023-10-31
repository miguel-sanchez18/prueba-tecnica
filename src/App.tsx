import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import imageFooter from "./assets/images/image-footer.png";
import footerMovile from "./assets/images/footer-movile.svg";
import image from "./assets/images/image-cd.svg";

import "./App.css";
import { neutral } from "./mui/colors";
// styles
const CardMediaWrapper = styled("div")({
  minWidth: 720,
  margin: "0 auto",
  position: "relative",
  height: "auto",
});

const PageContentWrapper = styled("div")({
  maxWidth: 350,
  margin: "15% auto 15% auto",
  textAlign: "center",
});

const ConstructionCard = styled(Card)({
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
});

const CardMediaParts = styled("img")({
  position: "relative",
  top: 0,
  left: 0,
  width: "100%",
  animation: "mymove 10s infinite",
});

const FooterCard = styled("div")({
  backgroundImage: `url(${imageFooter})`,
  position: "relative",
  margin: "0 10",
  textAlign: "center",
  height: 280,
});

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <ConstructionCard>
      <CardContent>
        <Grid container justifyContent="center" spacing={3}>
          <CardMediaWrapper>
            <CardMedia component="img" title="Slider 3 image" />
            <CardMediaParts src={image} title="Slider 1 image" />
          </CardMediaWrapper>
          <Grid item xs={12}>
            <PageContentWrapper>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography
                    variant="h1"
                    component="div"
                    sx={{ color: `${neutral[0]}` }}
                  >
                    Agencia dev mkt escuela
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="column" justifyContent="flex-end">
                    <Typography
                      variant="body2"
                      sx={{ color: `${neutral[0]}`, fontWeight: 600 }}
                    >
                      CENTRO INTEGRAL DE DISEÑO
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: neutral[0],
                        textAlign: "justify",
                        fontSize: "12px",
                        fontWeight: 500,
                        margin: "10px 0 0 0",
                      }}
                    >
                      Somos una agencia de diseño líder que combina estrategia,
                      creatividad y tecnología para brindar soluciones visuales
                      y digitales impactantes. Con un enfoque centrado en el
                      usuario, ofrecen servicios integrales que incluyen
                      branding, diseño gráfico, desarrollo web y marketing
                      digital, ayudando a las marcas a destacar y prosperar en
                      el mundo digital.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </PageContentWrapper>
          </Grid>
        </Grid>
      </CardContent>
      <FooterCard sx={{backgroundImage: width < 646? `url(${imageFooter})`: `url(${footerMovile})` }}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sx={{ bottom: 0 }}>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  sx={{
                    color: `${neutral[0]}`,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  ¿estas interesado? platica con nosotros
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Button
                    variant="outlined"
                    sx={{
                      color: neutral[0],
                      borderRadius: 50,
                      borderColor: neutral[0],
                    }}
                    endIcon={<WhatsAppIcon />}
                  >
                    manda un mensaje
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ bottom: 100 }}>
            <Typography
              variant="body2"
              sx={{
                color: neutral[0],
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 500,
                margin: "10px 0 0 0",
              }}
            >
              queremos ayudarte a crear tu proyecto
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{
                color: neutral[0],
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 500,
                margin: "10px 0 0 0",
              }}
            >
              ©copyright 2023 CID
            </Typography>
          </Grid>
        </Grid>
      </FooterCard>
    </ConstructionCard>
  );
}

export default App;
