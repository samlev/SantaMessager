import axios from 'axios';
import { CompanyProfile, CompanySearch } from './company';

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try{
    const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${process.env.REACT_APP_API_KEY}&limit=10`);
    return data;
  } catch (error) {
    if(axios.isAxiosError(error)){
      console.log("axios error", error.message);
      return error.message;
    } else {
      console.log("unexpected error", error);
      return "An unexpected error occurred";
    }
  }
}