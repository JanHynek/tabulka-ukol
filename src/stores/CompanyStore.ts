import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ICompaniesApiResponse } from "../types/company";
import RootStore from "./RootStore";
import { headers } from "../utils/api";

class CompanyStore {
  rootStore: RootStore;
  loading: boolean = false;
  search: string = "";
  page: number = 0;
  rowsPerPage: number = 10;
  companies: ICompaniesApiResponse | undefined;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setSearch(value: string) {
    this.search = value;
  }

  setPage(value: number) {
    this.page = value;
  }

  setRowsPerPage(value: number) {
    this.rowsPerPage = value;
  }

  setCompanies(data: ICompaniesApiResponse) {
    if (data.success) this.companies = data;
  }

  resetCompanies() {
    this.companies = undefined;
  }

  fetchCompanies = async (search: string, offset: number, limit: number) => {
    this.setLoading(true);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}company/`,
        {
          headers,
          params: {
            fulltext: search !== "" ? search : undefined,
            offset,
            limit,
          },
        }
      );
      this.setCompanies(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  };
}
export default CompanyStore;
