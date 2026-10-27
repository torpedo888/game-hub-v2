import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      templateRows="auto 1fr"
      minHeight="100vh"
      bg="bg"
      color="fg"
    >
      <GridItem as="nav" area="nav">
        <Navbar />
      </GridItem>
      <GridItem
        as="aside"
        area="aside"
        bg="bg.subtle"
        padding={4}
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
      <GridItem as="main" area="main" bg="bg" padding={4}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
