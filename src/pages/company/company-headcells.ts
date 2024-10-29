import { headCell } from "../../types/headcells";

export const companyHeadCells: headCell[] = [
  {
    type: "companyLink",
    id: "name",
    label: "Název/Jméno",
  },
  {
    type: "bold",
    id: "owner.fullName",
    label: "Vlastník",
  },
  {
    id: "contactAddress.address.city",
    label: "Město",
  },
  {
    id: "regNumber",
    label: "IČO",
  },
  {
    id: "taxNumber",
    label: "DIČ",
  },
  {
    type: "clientState",
    id: "state",
    label: "Typ klienta",
  },
];
