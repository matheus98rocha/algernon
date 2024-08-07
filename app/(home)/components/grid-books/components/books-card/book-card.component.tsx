"use client";
import React, { useState, useCallback } from "react";
import { Book as BookProps } from "../../../../types/book.type";
import * as S from "./book-card.styles";
import Image from "next/image";
import BookMark from "../../../bookmark/book-mark.component";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import favoriteBook from "@/app/(home)/services/favorite-book.service";

function BookCard({
  author,
  book,
  status,
  isFavorite: initialFavorite,
  description,
  id,
  imageUrl,
}: BookProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialFavorite);

  const handleFavoriteClick = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      const updatedFavorite = !isFavorite;
      setIsFavorite(updatedFavorite);
      await favoriteBook(
        {
          author,
          book,
          status,
          description,
          id,
          isFavorite: updatedFavorite,
          imageUrl,
        },
        id,
      );
    },
    [author, book, status, description, id, isFavorite],
  );

  return (
    <>
      <S.WrapperBookCard onClick={() => alert("Dalee 1 ")} sx={{ zIndex: 1 }}>
        <S.HeaderBookCard>
          {isFavorite ? (
            <FavoriteIcon
              sx={{ zIndex: 2, color: "red" }}
              onClick={handleFavoriteClick}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{ zIndex: 2 }}
              onClick={handleFavoriteClick}
            />
          )}
          <BookMark status={status} />
        </S.HeaderBookCard>
        <S.BookTitle variant="h6">{book}</S.BookTitle>
        <Image
          src={imageUrl}
          alt="book image"
          width={100}
          height={150}
          loading="eager"
        />
        <S.BookAuthor variant="body2">{author}</S.BookAuthor>
      </S.WrapperBookCard>
    </>
  );
}

export default BookCard;
