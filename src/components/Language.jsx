import { Box, Typography, LinearProgress, Divider } from "@mui/material";

const languages = [
  { name: "English", level: 70 },
  { name: "Burmese", level: 80 },
  { name: "Hindi", level:65  },
];

const Languages = () => (
  <Box
    id="languages"
    sx={{
      minHeight: "50vh",
      px: { xs: 4, md: 12 },
      py: 8,
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
      Language Expertise
    </Typography>

 
    <Typography
      variant="body1"
      textAlign="center"
      mb={6}
      sx={{ maxWidth: 600, mx: "auto", color: "#444", lineHeight: 1.6 }}
    >
     From an early age, I have undertaken English courses that have helped me develop strong reading and writing abilities. I am proficient in Burmese, having completed my education at a government school. Furthermore, I have a basic proficiency in Hindi, which connects me to my Indian heritage.
    </Typography>

    <Box maxWidth={600} mx="auto">
      {languages.map(({ name, level }, idx) => (
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

          {idx !== languages.length - 1 && (
            <Divider sx={{ bgcolor: "#ddd", mt: 1 }} />
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

export default Languages;
