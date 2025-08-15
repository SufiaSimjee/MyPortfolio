import { Box, Typography, LinearProgress, Divider } from "@mui/material";

const skills = [
  { name: "IT Fundamentals", level: 100 },
  { name: "Networking", level: 75 },
  { name: "Microsoft Office", level: 80 },
  { name: "UI/UX Design", level: 70 },
  { name: "Prototyping (Figma & Axure RP)", level: 60 },
  { name: "DevOps (GitHub, Docker & CI/CD)", level: 50 },
  { name: "Database (MySql, Firebase & MongoDB)", level: 75 },
  { name: "HTML , CSS & Javascript", level: 80 },
    { name: "UI Library (Bootstrap, Tailwind & Material UI)", level: 70 },
  { name: "PHP (Laravel)", level: 60 },
  { name: "Object-Oriented Programming (C#, C++ & Java)", level: 65 },
  { name: "React Framework", level: 75 },
  { name: "Nodejs Framework", level: 70 },
    { name: "Cloud Computing (Render, Vercel & AWS)", level: 75 }
];

const Skills = () => (
  <Box
    id="skills"
    sx={{
      minHeight: "50vh",
      px: { xs: 4, md: 12 },
      py: 8,
      backgroundColor: "#f9fafb",
    }}
  >
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={3}
      textAlign="center"
      letterSpacing={1}
      sx={{ color: "#222" }}
    >
      Skills
    </Typography>

    <Typography
      variant="body1"
      textAlign="center"
      mb={6}
      sx={{ maxWidth: 600, mx: "auto", color: "#444", lineHeight: 1.6 }}
    >
      Over the years, I have built a solid foundation in web development, starting with HTML, CSS, and JavaScript, and progressing to advanced topics such as databases, frameworks, software architecture, and cybersecurity. Alongside technical skills, I have also pursued knowledge in networking, requirement analysis, and project management, recognizing their importance in delivering successful IT solutions. I remain committed to continuous learning to stay current with the rapidly evolving technology landscape.
    </Typography>

    <Box maxWidth={600} mx="auto">
      {skills.map(({ name, level }, idx) => (
        <Box key={idx} sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ minWidth: 130, fontWeight: 600, color: "#333" }}
            >
              {name}
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
              <LinearProgress
                variant="determinate"
                value={level}
                sx={{
                  height: 14,
                  borderRadius: 7,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 7,
                    backgroundColor: "#1976d2",
                  },
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ minWidth: 35, fontWeight: 600, color: "#1976d2" }}
            >
              {level}%
            </Typography>
          </Box>

          {idx !== skills.length - 1 && (
            <Divider sx={{ bgcolor: "#ddd", mt: 1 }} />
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

export default Skills;
