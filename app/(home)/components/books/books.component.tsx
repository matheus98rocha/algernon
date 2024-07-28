import Grid from "@mui/material/Unstable_Grid2";
import BookCard from "./book-card.component";
import { getBooks } from "../../services/get-books.service";

export default async function Books() {
  const books = await getBooks();

  return (
    <Grid container spacing={3}>
      {/* Componentizar esse map */}
      {books.map((book) => (
        <Grid key={book.id} sm={6} lg={4} xs={12}>
          <BookCard
            description={book.description}
            book={book.book}
            author={book.author}
            id={book.id}
            status={book.status}
          />
        </Grid>
      ))}
    </Grid>
  );
}