import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
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
