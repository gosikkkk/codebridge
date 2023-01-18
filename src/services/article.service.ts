import axios from 'axios'

import { API_BASE_URL } from '../constants/api.constants';
import { ARTICLES_ROUTE } from '../constants/routes.constants';
import { IGetArticleByIdRequestDTO, IGetArticleByIdResponseDTO, IGetArticlesResponseDTO } from '../dtos/article.dto';

export const getArticles = async (): Promise<IGetArticlesResponseDTO> => { 
  try {
    const response = await axios.get<IGetArticlesResponseDTO>(`${API_BASE_URL}${ARTICLES_ROUTE}`);
    return response?.data
  } catch (error) {
    console.error('Failed to fetch articles.', error);
    throw error;
  }
}

export const getArticleById = async (dto: IGetArticleByIdRequestDTO): Promise<IGetArticleByIdResponseDTO> => { 
  try {
    const { id } = dto;
    const response = await axios.get<IGetArticleByIdResponseDTO>(`${API_BASE_URL}${ARTICLES_ROUTE}/${id}`);
    return response?.data
  } catch (error) {
    console.error('Failed to fetch articles.', error);
    throw error;
  }
}
