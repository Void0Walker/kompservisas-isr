import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Star } from "@mui/icons-material";

export interface ReviewCardData {
  headerInitials: string;
  headerName: string;
  reviewText: string;
}

export default function RemontasReviewCard({ headerInitials, headerName, reviewText }: ReviewCardData) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: "21.5rem",
        minHeight: "12rem",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      }}
      elevation={1}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.light,
              color: theme.palette.getContrastText(theme.palette.primary.light),
            }}
            aria-label="avatar"
          >
            {headerInitials}
          </Avatar>
        }
        title={headerName}
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardContent>
        <Typography variant="body2">{reviewText}</Typography>
        <Box sx={{ display: "flex", gap: "0.1rem", justifyContent: "flex-start", mt: "1rem" }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <Star key={value} sx={{ color: "#FFD700" }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
