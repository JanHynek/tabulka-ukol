import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ICompanyApiResponse } from "../types/company";
import RootStore from "./RootStore";
import { headers } from "../utils/api";

class CompanyDetailStore {
  rootStore: RootStore;
  loading: boolean = false;
  company: ICompanyApiResponse | undefined;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setCompany(data: ICompanyApiResponse) {
    if (data.success) this.company = data;
  }

  resetCompany() {
    this.company = undefined;
  }

  fetchCompany = async (id: number) => {
    this.setLoading(true);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}company/${id}`,
        {
          headers,
        }
      );
      this.setCompany(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  };
}
export default CompanyDetailStore;
