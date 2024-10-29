import { Box } from "@mui/material";

export interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
  return (
    <Box
      sx={{ backgroundColor: "#F2F4F6" }}
      height="calc(100vh - 64px)"
      p={{ xs: 3, md: 4 }}
    >
      {children}
    </Box>
  );
};

export default AppLayout;
