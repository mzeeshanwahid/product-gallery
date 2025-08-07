import { RatingGroup } from "@chakra-ui/react";
import type { RatingProps } from "../../interfaces";

const Rating = ({ value }: RatingProps) => {
  return (
    <RatingGroup.Root
      readOnly
      allowHalf
      count={5}
      value={value}
      size="sm"
      colorPalette="yellow"
    >
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
  );
};

export default Rating;

