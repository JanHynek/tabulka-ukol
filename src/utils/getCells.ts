import { KeyedObject } from "../components/table/GenerateTableRow";

export const getCells = (cells: Array<any>, row: KeyedObject) => {
  return cells.map((cell) => {
    return getCell(cell, row);
  });
};

const getCell = (cell: any, row: KeyedObject) => {
  const cellIds = cell?.id?.split("&");
  let value: string | number | KeyedObject = "";

  cellIds.forEach((cellId: string) => {
    const cellIdPart = cellId.split(".");
    let currentObj = row;

    cellIdPart.forEach((i) => {
      currentObj = currentObj[i] ? currentObj[i] : "";
    });

    value = currentObj;
  });

  return getFormattedCell(cell, value);
};

const getFormattedCell = (cell: any, value: string | number | KeyedObject) => {
  return {
    id: cell?.id,
    permanent: cell?.permanent,
    type: cell?.type,
    enumType: cell?.enumType,
    ops: cell?.ops,
    align: cell?.align,
    label: cell?.label,
    width: cell?.width,
    allowSort: cell?.allowSort,
    sortById: cell?.sortById,
    value: typeof value === "string" ? value?.trim() : value,
    sticky: cell?.sticky,
    none: cell?.none,
  };
};
