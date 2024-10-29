import CompanyDetailStore from "./CompanyDetailStore";
import CompanyStore from "./CompanyStore";

class RootStore {
  companyDataStore: CompanyStore;
  companyDetailStore: CompanyDetailStore;

  constructor() {
    this.companyDataStore = new CompanyStore(this);
    this.companyDetailStore = new CompanyDetailStore(this);
  }
}
export default RootStore;
