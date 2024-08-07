import type { Metadata } from "next";
import "../globals.css";

import { Container } from "@mui/material";
import Header from "../components/layout/header/header.component";
import logout from "../(auth)/auth/services/logout";
import getUserDetails from "./services/get-user-details.service";
import FloatingButton from "./components/floating-button/floating-button.component";

export const metadata: Metadata = {
  title: "Algernon",
  description: "An app for save your favorites books",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserDetails();
  return (
    <div>
      <Header logout={logout} user={user} />
      <Container
        sx={{
          marginTop: "42px",
        }}
      >
        {children}
        <FloatingButton />
      </Container>
    </div>
  );
}
