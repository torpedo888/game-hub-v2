import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  return (
    <>
      {isLoading && <Spinner />}

      <List.Root listStyleType={"none"}>
        {data.map((g) => (
          <List.Item key={g.id} padding={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={g.image_background}
                alt={g.name}
              />
              <Button
                variant="plain"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
