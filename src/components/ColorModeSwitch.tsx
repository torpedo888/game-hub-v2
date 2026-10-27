import { Switch } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ColorModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Switch.Root
      checked={resolvedTheme === "dark"}
      onCheckedChange={({ checked }: { checked: boolean }) =>
        setTheme(checked ? "dark" : "light")
      }
      colorPalette="blue"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label whiteSpace="nowrap">Dark mode</Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
