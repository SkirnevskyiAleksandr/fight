import { callApi } from '../helpers/apiHelper';

class FighterService {
  #endpoint = 'fighters.json';

  async getFighters() {
    try {
      const apiResult = await callApi(this.#endpoint);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(id) {

    try {
      const r = `details/fighter/${id}.json`
      const apiResult = await callApi(r);

      return apiResult;

    } catch (error) {
      throw error;
    }
    // todo: implement this method
    // endpoint - `details/fighter/${id}.json`;
    // const r = `details/fighter/${id}.json`
    // callApi(this.r)
  }

}


export const fighterService = new FighterService();
