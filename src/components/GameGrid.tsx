import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);

  return (
    <>
      {error && (
        <Text role="alert" color="fg.error">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        gap={5}
        aria-busy={isLoading}
        aria-label="Games"
      >
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <GameCardSkeleton key={index} />
            ))
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
