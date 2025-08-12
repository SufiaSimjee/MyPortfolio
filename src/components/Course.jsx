import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import Slider from "react-slick";

import courseCertificate1 from "../assets/courses/course1.jpg";
import BIM from "../assets/courses/BIM.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const coursesData = [
  {
    courseName: "IT Infrastructure Fundamentals Program",
    place: "BIM Institute",
    timeline: "Sep 2020 – Nov 2020 | Yangon, Myanmar",
    description: "Comprehensive program covering IT infrastructure, networking, and security.",
    certificateImg: BIM,
  },
  {
    courseName: "Google IT Support Professional Certificate",
    place: "Coursera",
    timeline: "May 2021 - Aug 2021 | Online",
    description: "Foundations of IT support and troubleshooting.",
    certificateImg: courseCertificate1,
  },
  {
    courseName: "English Upper-Class Intermediate Course",
    place: "SCBI Language School",
    timeline: "Jan 2021 - March 2021 | Yangon, Myanmar",
    description: "Intensive English course focusing on upper-intermediate skills.",
    certificateImg: null,
  },
];

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpen = (certificateImg) => {
    setSelectedCertificate(certificateImg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCertificate(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <Box
      id="courses"
      sx={{
        minHeight: "80vh",
        px: { xs: 2, md: 8 },
        py: 8,
         backgroundColor: "#f9fafb",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
        align="center"
        sx={{ letterSpacing: 1 }}
      >
        Courses & Certifications
      </Typography>

      <Box
        sx={{
          width: "80vw",
          maxWidth: 800,
          mx: "auto",
        }}
      >
        <Slider {...settings}>
          {coursesData.map(
            ({ courseName, place, timeline, description, certificateImg }, idx) => (
              <Card
                key={idx}
                elevation={0}
                sx={{
                  borderRadius: 3,
                  bgcolor: "white",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 280,
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  boxShadow: "none",
                  cursor: certificateImg ? "pointer" : "default",
                  "&:hover": {
                    boxShadow:  "0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)",
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Typography variant="h6" fontWeight={700} mb={1.5}>
                  {courseName}
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" mb={1}>
                  {place} — {timeline}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.5, fontStyle: "italic", mb: 3 }}
                >
                  {description}
                </Typography>

                {certificateImg && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(certificateImg)}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    View My Certificate
                  </Button>
                )}
              </Card>
            )
          )}
        </Slider>
      </Box>

      {/* Dialog for Certificate */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Certificate</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          {selectedCertificate ? (
            <Box
              component="img"
              src={selectedCertificate}
              alt="Certificate"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          ) : (
            <Typography>No certificate available.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Courses;
