import {
  backOne,
  backTwo,
  backThree,
  backFour,
  backFive,
  tronLabsLogo,
  Game,

} from "./assets/index";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import "./App.css"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <Box>
      <Parallax pages={6}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${tronLabsLogo})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          offset={0}
          factor={2}
          speed={0.5}
        />
        <ParallaxLayer
          offset={1}
          factor={2.2}
          speed={1}
          style={{
            backgroundImage: `url(${backTwo})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />

        <ParallaxLayer
          offset={2}
          factor={2.6}
          speed={1.5}
          style={{
            backgroundImage: `url(${backOne})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ParallaxLayer
          offset={3}
          factor={2.8}
          speed={1.8}
          style={{
            backgroundImage: `url(${backThree})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ParallaxLayer
          offset={4}
          factor={3}
          speed={2}
          style={{
            backgroundImage: `url(${backFour})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ParallaxLayer
          offset={5}
          speed={2.2}
          style={{
            backgroundImage: `url(${backFive})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ParallaxLayer
          sticky={{ start: 1, end: 6 }}
          style={{ textAlign: "end" }}
          speed={1}
        >
          <img style={{ width: "200px", height: "200px" }} src={Game} alt="" />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.1, end: 0.82 }}
          style={{ textAlign: "start" }}
          speed={2}
        >
          <Box
            bgcolor="#3333336e"
            width="50%"
            sx={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            p={2}
            mt={2}
          >
            <Typography variant="h4" color="white">
              Welcome To TronLabs
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1.5, end: 1.82 }}
          style={{ textAlign: "start" }}
          speed={2}
        >
          <Box
            bgcolor="#3333336e"
            width="50%"
            sx={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            p={2}
            mt={2}
          >
            <Typography variant="h4" color="white">
              Welcome to our platform dedicated to propelling global progress
              through intelligent technology.
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2.5, end: 2.82 }}
          style={{ textAlign: "start" }}
          speed={2}
        >
          <Box
            bgcolor="#3333336e"
            width="50%"
            sx={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            p={2}
            mt={2}
          >
            <Typography variant="h4" color="white">
              Step into a realm where innovation meets purpose, driving the
              world forward with intelligent tech solutions.
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3.5, end: 3.82 }}
          style={{ textAlign: "start" }}
          speed={2}
        >
          <Box
            bgcolor="#3333336e"
            width="50%"
            sx={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            p={2}
            mt={2}
          >
            <Typography variant="h4" color="white">
              Join us in our mission to shape the future using cutting-edge
              intelligent technology for a better tomorrow.
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.2, end: 4.7 }}
          style={{ textAlign: "start" }}
          speed={2}
        >
          <Box
            bgcolor="#3333336e"
            width="50%"
            sx={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            p={2}
            mt={2}
          >
            <Typography variant="h4" color="white">
              Explore a world of possibilities where intelligent technology is
              at the forefront of transforming industries and societies.
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 5, end: 5.9 }}
          style={{ textAlign: "start" }}
          speed={2}
        >
          <Box
            bgcolor="#3333336e"
            width="50%"
            sx={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            p={2}
            mt={2}
          >
            <Typography variant="h4" color="white">
              Welcome to a place where intelligent technology leads the way in
              advancing every aspect of our world.
            </Typography>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}

export default App;
