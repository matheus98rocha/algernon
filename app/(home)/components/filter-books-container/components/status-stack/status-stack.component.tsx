"use client";

import React, { useCallback, useEffect } from "react";
import {
  statusOptions,
  statusTextMap,
} from "../../../../constants/books-status";
import Link from "next/link";
import * as S from "./status-stack.styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSearchParams } from "next/navigation";
import revalidateTag from "@/app/common/utils/revalidate-tag";
import BookMark from "../../../bookmark/book-mark.component";
import { BookStatus } from "../../../../types/book.type";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface StatusStackProps {
  setBookName: (name: string) => void;
}

const StatusStack: React.FC<StatusStackProps> = ({ setBookName }) => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");
  const isFavoriteParam = searchParams.get("isFavorite");

  useEffect(() => {
    setBookName("");
    revalidateTag("books");
  }, [statusParam, isFavoriteParam, setBookName]);

  const renderLink = useCallback(
    (status: string | null, label: string) => (
      <Link
        key={status || "all"}
        href={{
          pathname: "/",
          query: status ? { status } : undefined,
        }}
        passHref
        style={{ textDecoration: "none" }}
      >
        <S.ItemStyled isActive={statusParam === status && !isFavoriteParam}>
          {label}{" "}
          {status !== null && <BookMark status={status as BookStatus} />}
        </S.ItemStyled>
      </Link>
    ),
    [statusParam, isFavoriteParam],
  );

  return (
    <S.StackWrapper scrollable={onlySmallScreen}>
      {renderLink(null, "Todos")}
      {statusOptions.map((status) => renderLink(status, statusTextMap[status]))}
      <Link
        href={{
          pathname: "/",
          query: { isFavorite: true },
        }}
        passHref
        style={{ textDecoration: "none" }}
      >
        <S.ItemStyled isActive={Boolean(isFavoriteParam)}>
          Favoritos <FavoriteBorderIcon />
        </S.ItemStyled>
      </Link>
    </S.StackWrapper>
  );
};

export default StatusStack;
