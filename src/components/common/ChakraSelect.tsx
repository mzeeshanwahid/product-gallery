import { createListCollection, Select } from "@chakra-ui/react";
import type { ChakraSelectProps } from "../../interfaces";

const ChakraSelect = ({
  items,
  placeholder,
  category,
  setCategory,
}: ChakraSelectProps) => {
  const frameworks = createListCollection({
    items,
  });

  return (
    <Select.Root
      collection={frameworks}
      size="sm"
      width="100%"
      value={[category]}
      onValueChange={(e) => setCategory(e.value[0])}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Select.Positioner>
        <Select.Content>
          {frameworks.items.map((framework) => (
            <Select.Item item={framework} key={framework.value}>
              {framework.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

export default ChakraSelect;

