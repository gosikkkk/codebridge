import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

import s from "./Article.module.scss";

import { IArticle } from "../../models";
import { getArticleById } from "../../services/article.service";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    (async function () {
      if (typeof id === 'string') {
        const article: IArticle = await getArticleById({ id });
        setArticle(article);
      }
    })()
  }, [id]);

  return (
    <div>
      {article && (
        <>
          <Card>
          <CardMedia><img className={s.images} src={article.imageUrl} alt="article" /></CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                {article.title}
              </Typography>
              <Typography variant="body2" color="text">
                {article.summary}
              </Typography>
            </CardContent>
          </Card>
          <Button sx={{ mt: 5 }} size="small" href="/homepage">
            Back to homepage
          </Button>
        </>
      )}
    </div>
  );
};

export { ArticlePage };
