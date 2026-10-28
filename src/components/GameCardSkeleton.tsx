import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root overflow="hidden" aria-hidden="true">
      <Skeleton aspectRatio={3 / 2} width="full" />
      <Card.Body>
        <SkeletonText noOfLines={2} gap={3} />
        <Skeleton height="20px" width="40%" marginTop={4} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
