import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";

export interface ISkillProps {
  id: number;
  skill: string;
}

const getAll = async (): Promise<ISkillProps[] | ApiException> => {
  try {
    const { data } = await Api().get('/skills');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

export const SkillService = {
  getAll
}
