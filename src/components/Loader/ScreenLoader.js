import { Box, CircularProgress } from "@mui/material";

export default function ScreenLoader() {
  return (
    <Box
      sx={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
        marginLeft: "45%",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
