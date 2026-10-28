import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
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
              <Text fontSize={"lg"}>{g.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
