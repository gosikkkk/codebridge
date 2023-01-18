import { IArticle } from "../models/article.interface";

export type IGetArticlesResponseDTO = Array<IArticle>;

export interface IGetArticleByIdRequestDTO {
  readonly id: string;
}

export type IGetArticleByIdResponseDTO = IArticle;
