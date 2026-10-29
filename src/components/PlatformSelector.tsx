import { Button, Menu } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown, BsMenuButton } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return <p>{error}</p>;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Platforms <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item key={platform.id} value={String(platform.id)}>
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
