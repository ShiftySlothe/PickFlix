import NextError from 'next/error';
import { Skeleton } from '@chakra-ui/skeleton';
import { Checkbox } from '@chakra-ui/checkbox';
import { trpc } from '../../../server/utils/trpc';
import { Field, FieldProps } from 'formik';
import { FormControl } from '@chakra-ui/form-control';
import { Box } from '@chakra-ui/layout';

export function GenresSelection() {
  const genreQuery = trpc.useQuery(['movies.getAllGenres']);
  return (
    <>
      {genreQuery.error && (
        <NextError
          title={genreQuery.error.message}
          statusCode={genreQuery.error.data?.httpStatus || 500}
        />
      )}
      <Skeleton isLoaded={genreQuery.isSuccess}>
        {genreQuery.data ? (
          genreQuery.data.map((genre) => (
            <Field name="genres" key={genre.id}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  id={genre.name}
                  isInvalid={!!form.errors.genre && !!form.touched.genres}
                >
                  <Box
                    borderRadius="10%"
                    border="2px"
                    borderColor="gray.200"
                    m={1}
                  >
                    <Checkbox p={2} {...field} value={genre.id}>
                      {genre.name}
                    </Checkbox>
                  </Box>
                </FormControl>
              )}
            </Field>
          ))
        ) : (
          <NextError title={'No genres found'} statusCode={404} />
        )}
      </Skeleton>
    </>
  );
}
