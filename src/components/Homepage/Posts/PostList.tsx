import { Grid } from "@mui/material";
import { IArticle } from "../../../models";
import { Post } from "./Post";

const ListPage = ({ searchResult }: { searchResult: Array<IArticle> }) => {
  // const result = searchResult.map(articles => <Post key={articles.id} articles={articles}/>)

  // const content = result?.length ? result : <article><p>No matching post</p></article>
  return (
    <Grid container spacing={2}>
      {searchResult.map((article) => (<Post article={article} key={article.id} />))}
    </Grid>
  );
};

export default ListPage;
