export interface ICompaniesApiResponse {
  success: string;
  totalCount: number;
  data: ClientData[];
}

export interface ICompanyApiResponse {
  success: string;
  totalCount: number;
  data: ClientData;
}

interface ClientData {
  id: number;
  name: string;
  titleBefore: string | null;
  firstName: string | null;
  lastName: string | null;
  titleAfter: string | null;
  person: boolean;
  role: string;
  state: string;
  rating: string;
  owner: Owner;
  regNumber: string;
  taxNumber: string;
  taxNumber2: string | null;
  taxPayer: string;
  bankAccount: string | null;
  databox: string | null;
  court: string | null;
  primaryAddress: AddressInfo;
  contactAddress: AddressInfo;
  category: Category;
  turnover: Value;
  economyActivity: Value;
  companyClassification1: Value;
  companyClassification2: Value;
  companyClassification3: Value;
  paymentTerm: Value;
  contactSource: Value;
  birthday: string | null;
  notice: string;
  tags: string[];
  customFields: unknown;
  rowInfo: RowInfo;
  securityLevel: SecurityLevel;
  inlineGdpr: Gdpr[];
  _version: number;
}

interface Owner {
  id: number;
  fullName: string;
}

interface AddressInfo {
  id: number;
  primary: boolean;
  contactAddress: boolean;
  address: Address;
  territory: Territory;
  contactInfo: ContactInfo;
  extIds: unknown;
}

interface Address {
  id: number;
  city: string;
  country: string;
  name: string;
  province: string;
  street: string;
  zipCode: string;
  lat: number | null;
  lng: number | null;
}

interface Territory {
  id: number;
  value: string;
}

interface ContactInfo {
  email: string;
  email2: string | null;
  primary: boolean;
  tel1: string;
  tel1Type: string;
  tel2: string;
  tel2Type: string;
  www: string | null;
  otherContact: string | null;
}

interface Category {
  id: number;
  value: string;
}

interface Value {
  id: number;
  value: string;
}

interface RowInfo {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  rowAccess: unknown;
  rowState: unknown;
}

interface SecurityLevel {
  id: number;
  name: string;
}

interface Gdpr {
  id: number;
  validFrom: string;
  validTill: string;
  legalTitle: string;
  templateName: string;
  gdprTemplate: number;
}
