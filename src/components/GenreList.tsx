import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/img-url';

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onGenreSelect }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  // if (error) return null;

  return (
    <>
      <Heading as="h2" fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onGenreSelect(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
