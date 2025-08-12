import { Box, Typography, Stack } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const futurePlans = [
  "I am currently pursuing Android development as part of my final year coursework.",
  "I am advancing my skills in React Native to proficiently develop cross-platform mobile applications.",
  "I am independently studying UI/UX design to create more effective and user-friendly experiences.",
  "I aspire to build a career in the IT industry by developing innovative and impactful applications.",
  "Having gained practical IT skills applicable to real-world scenarios, I now feel prepared to begin my career as either a web developer or IT support professional. I am confident in my ability to meet basic client requirements, provide effective service, and help clients leverage IT technologies to enhance their operations."
];




const FuturePlan = () => (
  <Box
    id="futureplan"
    sx={{
      minHeight: "30vh",
      px: { xs: 4, md: 12 },
      py: 8,
      borderRadius: 3,
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: "0 8px 30px rgba(0,0,0,0.15)", 
      },
    }}
  >
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={5}
      textAlign="center"
      letterSpacing={1}
      sx={{ color: "#222" }}
    >
      Future Plan
    </Typography>

    <Stack
      spacing={3}
      maxWidth={700}
      mx="auto"
      sx={{
        color: "#444",
        fontSize: "1.15rem",
        lineHeight: 1.6,
        backgroundColor: "white",
        borderRadius: 2,
        p: 4,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {futurePlans.map((plan, idx) => (
        <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
          <CheckCircleIcon color="primary" sx={{ mt: "4px" }} />
          <Typography variant="body1">{plan}</Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default FuturePlan;
