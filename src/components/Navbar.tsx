import { Box, HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

function Navbar({ onSearch }: Props) {
  return (
    <HStack gap={3} paddingX={4} paddingY={2}>
      <Image
        src={logo}
        alt="Game Hub logo"
        boxSize="60px"
        objectFit="contain"
      />
      <Text fontSize="xl" fontWeight="bold"></Text>
      <SearchInput onSearch={onSearch} />
      <Box marginLeft="auto">
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
}

export default Navbar;
