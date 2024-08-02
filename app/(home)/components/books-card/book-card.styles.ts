import { Card, styled, Typography } from "@mui/material";

export const WrapperBookCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  gap: theme.spacing(1),
  ":hover": {
    cursor: "pointer",
    boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.2)`,
  },
}));

export const BookTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

export const BookAuthor = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "italic",
  color: theme.palette.text.secondary,
}));