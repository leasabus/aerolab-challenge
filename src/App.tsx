
import { NavBar } from "./components/NavBar"
import { Container } from "@chakra-ui/react";
import { ImageHome } from './components/ImageHome'
import { Footer } from "./components/Footer"
import { HomeScreen } from "./product/context";

export const App = () => {
  return (
    <>
      <NavBar />
      <ImageHome />
      <Container maxWidth="container.xl">

        <HomeScreen />
      </Container>

      <Footer />
    </>
  )
}

export default App;