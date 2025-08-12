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

import MatriculationTranscript from '../assets/education/Matriculation.webp';
import kbtcTranscript from '../assets/education/kbtc.jpg';
import Level4Transcript from '../assets/education/level4.png';
import Level5Transcript from '../assets/education/level5.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const educationData = [
  {
    diploma: "Matriculation Examination (Grade 11)",
    subject: "Myanmar, English, Mathematics, Physics, Chemistry , Biology",
    desc: "Achieved an aggregate score of 315 marks across all subjects",
    college: "ICEC School",
    location: "Yangon, Myanmar",
    transcriptImg: MatriculationTranscript,
    period: "Jun 2019 - 2020 ",
  },
  {
    diploma: "DIPLOMAIN PROGRAMMING (Endorsed), NCC Education",
    subject: "Computer System, Database Management System , Data Structure and Algorithms , Java and C# Programming ,Web Design and Development Fundamentals",
    desc: "Achieved Distinction in all modules of the NCC Education Endorsed Diploma in Programming, covering Computer Systems, Database Management System, Data Structures and Algorithms, Java Programming, C# Programming, and Web Design & Development Fundamentals",
    college: "KBTC College",
    location: "Yangon, Myanmar",
    transcriptImg: kbtcTranscript,
    period: "Jan 2021 – Oct 2021",
  },
  {
    diploma: "LEVEL 4 DIPLOMAIN IN COMPUTING, NCC Education",
    subject: "Computer System, Computer Networks, Databases, Designing and Developing Object-Oriented Computer Programs, Designing and Developing Website , Office Solutions Development , Skills for Computing , Software Development Technique",
    desc: "Awarded Distinction in every unit of the NCC Education Level 4 Diploma in Computing.",
    college: "KMD College",
    location: "Yangon, Myanmar",
    transcriptImg: Level4Transcript,
    period: "Jan 2023 – Nov 2023",
  },
  {
    diploma: "LEVEL 5 DIPLOMAIN IN COMPUTING, NCC Education" ,
    subject: "Agile Development , Computing Project, Database Design and Development, Dynamic Websites, Information Systems Analysis, Network Security and Cryptography",
    desc: "Awarded Distinction in core modules such as Computing Project, Database Design and Development,Dynamic Websites, Information Systems Analysis, and Network Security and Cryptography.",
    college: "KMD College",
    location: "Yangon, Myanmar",
    transcriptImg: Level5Transcript,
    period: "Jan 2024 – Nov 2025 ",
  },
   {
    diploma: "B.Sc. (Hons) Computing, University of Greenwich" ,
    subject: "Requirements Management , Project , Human Computer Interaction and Design,Mobile Application Design & Development,Enterprise Web Software Development ",
    desc: "Currently pursuing a Bachelor of Science (Hons) in Computing at the University of Greenwich, with an expected completion date of 2025",
    college: "KMD College",
    location: "Yangon, Myanmar",
    transcriptImg: null,
    period: "Jan 2025 – Dec 2025 ",
  },
];

const Education = () => {
  const [open, setOpen] = useState(false);
  const [selectedTranscript, setSelectedTranscript] = useState(null);

  const handleOpen = (transcriptImg) => {
    setSelectedTranscript(transcriptImg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTranscript(null);
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
      id="education"
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
        Education
      </Typography>

      <Box
        sx={{
          width: "80vw",
          maxWidth: 800,
          mx: "auto",
        }}
      >
        <Slider {...settings}>
          {educationData.map(
            (
              { diploma, subject, desc, college, location, transcriptImg, period },
              idx
            ) => (
              <Card
                key={idx}
                elevation={0} 
                sx={{
                  borderRadius: 3,
                  bgcolor: "white",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 350,
                  transition: "box-shadow 0.3s ease",
                  boxShadow: "none",
                  cursor: transcriptImg ? "pointer" : "default",
                  "&:hover": {
                     boxShadow:
                      "0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)",
                      transform: "translateY(-6px)",
                  },
                }}
              >
                <Typography variant="h6" fontWeight={700} mb={1.5}>
                  {diploma}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" mb={1}>
                  {period}
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" mb={1}>
                  {college} — {location}
                </Typography>

                <Box
                  sx={{
                    mb: 1.5,
                    overflowWrap: "break-word",
                  }}
                >
                  <Typography
                    component="span"
                    variant="subtitle2"
                    fontWeight={700}
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    Subject:
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    color="text.primary"
                    sx={{ wordBreak: "break-word" }}
                  >
                    {subject}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.5,
                    fontStyle: "italic",
                    mb: 3,
                    overflowWrap: "break-word",
                  }}
                >
                  {desc}
                </Typography>

                {transcriptImg && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(transcriptImg)}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    View My Marks
                  </Button>
                )}
              </Card>
            )
          )}
        </Slider>
      </Box>

      {/* Dialog for Transcript */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Marks Transcript</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          {selectedTranscript ? (
            <Box
              component="img"
              src={selectedTranscript}
              alt="Transcript"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          ) : (
            <Typography>No transcript available.</Typography>
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

export default Education;
