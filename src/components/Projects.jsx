import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  CardMedia,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import university from "../assets/video/University.webm";
import home from "../assets/personalprojects/HomeAppliance.png";
import carpark from "../assets/personalprojects/Screenshot 2025-08-12 115402.png";
import camp from "../assets/personalprojects/camping.png";
import social from "../assets/personalprojects/socialmedia.png";

const projectsData = [
  {
    title: "University Idea Management System",
    description:
      "I collaborated as a full-stack developer to design and implement a web-based Idea Management System with role-based access controls, anonymous idea submissions, voting, and commenting.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/SufiaSimjee/University",
    liveDemo: "https://university-idea-demo.example.com",
    projectVideo: university,
    projectImage: "https://mui.com/static/images/cards/paella.jpg",
    period: "Jan 2025 – May 2025",
  },
  {
    title: "Home Appliance Management System",
    description:
      "I completed an academic project to develop a C# home appliance rental application featuring user authentication, shopping cart, order processing, search capabilities, and administrative functions. I employed object-oriented programming principles, created a comprehensive class diagram, and performed extensive functional testing to ensure reliability and effective error handling.",
    tech: [".Net (C#)", "MYSQL", "Winforms"],
    github: "https://github.com/SufiaSimjee/HomeApplianceManagementSystem",
    projectImage: home,
    period: "Jan 2023 – May 2023",
  },
  {
    title: "Car Park Membership & Payment Management System",
    description:
      "I completed an academic project involving the design and implementation of a Microsoft Access database alongside Excel tools to support membership and payment automation for a car parking business scenario. I created input forms and developed macros to facilitate efficient membership renewal processes and comprehensive reporting.",
    tech: ["Microsoft Access", "Excel", "VBA"],
    github:
      "https://github.com/SufiaSimjee/Car-Park-Membership-Payment-Management-System",
    projectImage: carpark,
    period: "Jan 2023 – May 2023",
  },
  {
    title: "Camping Website",
    description:
      "I developed a responsive camping website employing HTML, CSS, and JavaScript to create an intuitive user experience and streamline reservation management.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/SufiaSimjee/Camping-website",
    projectImage: camp,
    period: "June 2023 - Oct 2023",
  },
  {
    title: "Social Media Campaign Website",
    description:
      "I developed a Social Media Campaign website using PHP and vanilla JavaScript. The website was about promoting safe practices on social media platforms.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
    github: "https://github.com/SufiaSimjee/Social-Media-Campaign-Website",
    projectImage: social,
    period: "Jan 2024 - May 2024",
  },
];

const Projects = () => {
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
      id="projects"
      sx={{
        minHeight: "80vh",
        px: { xs: 2, md: 6 },
        py: 6,
        backgroundColor: "#f9fafb",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={5} align="center">
        My Projects
      </Typography>

      <Typography
        variant="body1"
        sx={{ maxWidth: 600, mx: "auto", color: "#444", lineHeight: 1.6 }}
        mb={6}
        textAlign="center"
      >
        Throughout my tech journey, I have completed various projects as part of
        my academic experience and to fulfill assessment requirements. These
        projects have enabled me to develop my coding skills and apply the
        knowledge I have gained during my studies to real-world scenarios. I am
        continuously striving to undertake more projects to further enhance my
        skill level.
      </Typography>

      <Box
        sx={{
          width: "80vw",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Slider {...settings}>
          {projectsData.map(
            (
              {
                title,
                description,
                tech,
                github,
                projectImage,
                period,
                projectVideo,
              },
              idx
            ) => (
              <Card
                key={idx}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 3,
                  bgcolor: "white",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow:
                      "0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)",
                    transform: "translateY(-6px)",
                  },
                }}
              >
                {/* Render video if present */}
                {projectVideo && (
                  <CardMedia
                    component="video"
                    height="250"
                    controls
                    src={projectVideo}
                    alt={`${title} Project Video`}
                    sx={{
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      mb: 2,
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* Render image only if no video OR project is NOT university */}
                {(!projectVideo ||
                  title !== "University Idea Management System") &&
                  projectImage && (
                    <CardMedia
                      component="img"
                      image={projectImage}
                      alt={`${title} Project Image`}
                      sx={{
                        borderTopLeftRadius: !projectVideo ? 12 : 0,
                        borderTopRightRadius: !projectVideo ? 12 : 0,
                        mb: 1,
                        width: "100%", 
                        height: {
                          xs: "auto", 
                          sm: "auto", 
                        },
                        objectFit: "cover",
                      }}
                    />
                  )}

                <CardContent>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {title}
                  </Typography>

                  <Typography variant="subtitle2" color="text.secondary" mb={1}>
                    {period}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
                    {tech.map((techName, i) => (
                      <Chip
                        key={i}
                        label={techName}
                        size="small"
                        color="primary"
                        variant="contained"
                        sx={{ fontWeight: 500 }}
                      />
                    ))}
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>

                {github && (
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      size="small"
                      href={github}
                      target="_blank"
                      variant="contained"
                      color="secondary"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      sx={{ textTransform: "none", fontWeight: 600 }}
                    >
                      GitHub
                    </Button>
                  </CardActions>
                )}
              </Card>
            )
          )}
        </Slider>
      </Box>
    </Box>
  );
};

export default Projects;
