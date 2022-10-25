import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Controller from "./contexts/Controller";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./contexts/TrackList";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div id="container">
        <Container
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 2,
              border: "1px solid black",
              borderRadius: "10px",
              bgcolor: "white",
            }}
          >
            <TrackList />
            <Controller />
          </Box>
        </Container>
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
