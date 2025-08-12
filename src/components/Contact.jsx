import { Box, Typography, Stack, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedlnIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "30vh",
        backgroundColor: "#f5f5f5",
        px: { xs: 2, md: 8 },
        py: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Contact Me
      </Typography>

      {/* Email */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        mb={1}
      >
        <EmailIcon color="primary" />
        <Typography variant="body1" color="text.secondary">
          Email:{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sufiasimjee123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            sufiasimjee123@gmail.com
          </a>
        </Typography>
      </Stack>

      {/* Phone */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        mb={4}
      >
        <PhoneIcon color="primary" />
        <Typography variant="body1" color="text.primary">
          Phone: +95 09266660271
        </Typography>
      </Stack>

      {/* Facebook and GitHub */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        mb={4}
      >
        <Link
          href="https://www.facebook.com/share/19f1UzWeuk/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <FacebookIcon color="primary" />
          <Typography variant="body1" color="text.primary">
            Facebook
          </Typography>
        </Link>

        <Link
          href="https://github.com/SufiaSimjee?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <GitHubIcon color="primary" />
          <Typography variant="body1" color="text.primary">
            GitHub
          </Typography>
        </Link>

          <Link
          href="https://www.linkedin.com/in/ sufia-simjee-81129537a"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <LinkedlnIcon color="primary" />
          <Typography variant="body1" color="text.primary">
            Linkedin
          </Typography>
        </Link>
      </Stack>

      {/* Footer message */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 4, fontStyle: "italic" }}
      >
        © {new Date().getFullYear()} Sufia Simjee — Thank you for visiting my
        portfolio!
      </Typography>
    </Box>
  );
};

export default Contact;
