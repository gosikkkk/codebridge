import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import reactStringReplace from "react-string-replace";

import { styled } from "@mui/material/styles";
import style from "./Search.module.scss";
import { IArticle } from "../../models";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = ({
  articles,
  searchTerm,
  searchResult,
  setSearchTerm,
  setSearchResult,
}: {
  articles: Array<IArticle>;
  searchTerm: string;
  searchResult: Array<IArticle>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchResult: Dispatch<SetStateAction<IArticle[]>>;
}) => {
  const handleSearchChange = (e: any): void => {
    const searchTerm: string = e.target.value;

    setSearchTerm(searchTerm);

    if (!searchTerm) {
      return setSearchResult(articles);
    }

    const filteredArticles: Array<IArticle> = articles.filter(
      (article) =>
        article.title.includes(searchTerm) ||
        article.summary.includes(searchTerm)
    );

    const regexp = new RegExp(searchTerm, "ig");
    const matchValue = searchTerm.match(regexp);
    console.log("matchValue", matchValue);

    const highlightText = (text: any, keyword: string) => (
      <div>
        {reactStringReplace(text, new RegExp(keyword, "ig"), (match, i) => (
          <>
            <span key={`${i}-highlighted`} style={{ backgroundColor: "yellow" }}>
              {keyword}
            </span>
            <span key={`${i}`}>
              {match}
            </span>
          </>
        ))}
        {}
      </div>
    );

    if (matchValue) {
      const withHighlightedText = filteredArticles.map((article) => {
        return {
          ...article,
          title: highlightText(article.title, searchTerm),
        };
      });
      setSearchResult(withHighlightedText as unknown as Array<IArticle>);
    } else {
      setSearchResult(filteredArticles);
    }
  };

  return (
    <>
      <div className={style.filterText}>
        <b>Filter by keywords</b>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <SearchIcon sx={{ mb: "1.5rem" }} />
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{ mb: "1.5rem" }}
            type="text"
            onChange={handleSearchChange}
          />
        </Toolbar>
      </Box>

      <div className={style.filterText}>Result:{searchResult.length}</div>
    </>
  );
};

export default SearchBar;
