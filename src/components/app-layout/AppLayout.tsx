import { Box } from "@mui/material";

export interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
  return (
    <Box
      sx={{ backgroundColor: "#F2F4F6" }}
      height="100vh"
      p={{ xs: 3, md: 6 }}
    >
      {children}
    </Box>
  );
};

export default AppLayout;
