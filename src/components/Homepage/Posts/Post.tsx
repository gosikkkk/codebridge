import { Button, Card, CardActions, CardContent, Grid, Typography, } from "@mui/material";
import { Link } from "react-router-dom";

import s from "./List.module.scss";
import { IArticle } from "../../../models";

export const Post = ({ article }: { article: IArticle }) => {
  return (
    <>
      <Grid item xs={4}>
        <Link className={s.link} to={`/homepage/${article.id}`} key={article.id}>
          <Card sx={{ height: "100%" }}>
            <img className={s.images} src={article.imageUrl} alt="article"></img>
            <CardContent>
              <Typography variant="body1">{article.publishedAt}</Typography>
              <Typography variant="h5" component="h5">
                {article.title}
              </Typography>
              <p> {article.summary}</p>
            </CardContent>

            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    </>
  );
};
