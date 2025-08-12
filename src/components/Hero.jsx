import { Box, Typography, Button, Stack } from "@mui/material";
import Slider from "react-slick";
import DownloadIcon from "@mui/icons-material/Download";

import img2 from "../assets/profile2.jpeg";
import img3 from "../assets/profile3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        pt: "80px",
        pb: 6,
        px: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: { xs: "flex-start", md: "center" },
        gap: 6,
        textAlign: { xs: "center", md: "left" },
        backgroundColor: "#fff",
        color: "#212121",
      }}
    >
      {/* Image Carousel */}
      <Box
        sx={{
          width: { xs: "70%", md: 400 },
          order: { xs: 1, md: 2 },
          mb: { xs: 4, md: 0 },
          borderRadius: 1,
          // boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          "& .slick-slide > div": {
            outline: "none",
          },
          "& img": {
            borderRadius: 3,
            objectFit: "cover",
            width: "100%",
            height: 520,
            transition: "transform 0.25s ease",
          },
          "& img:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Slider {...settings}>
          {[ img2, img3].map((imgSrc, index) => (
            <Box
              key={index}
              component="img"
              src={imgSrc}
              alt={`Profile ${index + 1}`}
            />
          ))}
        </Slider>
      </Box>

      {/* Text Section */}
      <Box sx={{ maxWidth: 480, order: { xs: 2, md: 1 } }}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            position: "relative",
            pb: 1,
            "&::after": {
              content: '""',
              position: "absolute",
              width: 60,
              height: 3,
              bgcolor: "primary.main",
              bottom: 0,
              left: 0,
              borderRadius: 2,
            },
          }}
        >
          Hi, I'm Sufia Yusoof Simjee
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          mt={2}
          mb={3}
          fontWeight={500}
        >
          B.Sc. (Hons) Computing Student | Aspiring Full-Stack Developer
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
          lineHeight={1.6}
        >
I am a passionate computing student with a keen interest in full-stack development. My tech journey began after finishing my matriculation exam, when I started learning the basics of computing. As I realized how much I enjoy working in this field, I decided to pursue further studies by joining an IT college to achieve a bachelor’s degree, aiming to start a career in the IT industry. I enjoy creating dynamic and responsive web applications and am always eager to learn new technologies and improve my skills. My goal is to start a career in web development, fulfilling client requirements through up-to-date technologies so they can fully leverage the internet for successful business growth.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Button
            variant="contained"
            color="primary"
            href="#projects"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              boxShadow: "none",
              "&:hover": {
                boxShadow: "0 4px 12px rgb(25 118 210 / 0.3)",
              },
            }}
          >
            View My Project
          </Button>

          {/* <Button
            variant="outlined"
            color="primary"
            href="#contact"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Contact Me
          </Button> */}
          <Button
            variant="outlined"
            color="secondary"
            href="/SufiaSimjeeCV.pdf"
            download
            startIcon={<DownloadIcon />}
            sx={{
              whiteSpace: "nowrap",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                boxShadow: "0 4px 12px rgb(25 118 210 / 0.3)",
              },
            }}
          >
            Download MY CV
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
