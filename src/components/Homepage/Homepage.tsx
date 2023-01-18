import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import { getArticles } from "../../services/article.service";
import { IArticle } from "../../models";
import SearchBar from "../Search/SearchBar";
import ListPage from "./Posts/PostList";

function Homepage() {
  const [articles, setArticles] = useState([] as Array<IArticle>);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([] as Array<IArticle>);

  useEffect(() => {
    (async () => {
      const articles: Array<IArticle> = await getArticles();

      await setArticles(articles);
      await setSearchResult(articles);
    })();
  }, []);

  return (
    <>
      <Container sx={{ mt: "4rem" }}>
        <SearchBar
          articles={articles}
          searchTerm={searchTerm}
          searchResult={searchResult}
          setSearchTerm={setSearchTerm}
          setSearchResult={setSearchResult}
        />
        <ListPage searchResult={searchResult} />
      </Container>
    </>
  );
}

export default Homepage;
