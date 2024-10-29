import { Chip, TableCell, TableRow, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface KeyedObject {
  [key: string]: string | number | KeyedObject | any;
}

interface IGenerateTableRow {
  rowData?: KeyedObject;
  index: number;
  cells: KeyedObject[];
}

const GenerateTableRow = ({ rowData, index, cells }: IGenerateTableRow) => {
  return (
    <TableRow hover sx={{ height: "50px" }}>
      {cells.map((cell: KeyedObject, cellIndex) => {
        const { type } = cell;
        const cellKey = `${cell?.type}${index}${cellIndex}`;
        switch (type) {
          case "companyLink": {
            return (
              <TableCell key={cellKey}>
                <Typography>
                  <Link
                    to={`/company/${rowData?.id}`}
                    style={{ fontWeight: 700, fontSize: "16px" }}
                  >
                    {rowData?.name}
                  </Link>
                </Typography>
              </TableCell>
            );
          }
          case "clientState": {
            const isPotencional = rowData?.state.split("_")[0] === "A";
            return (
              <TableCell key={cellKey}>
                <Chip
                  label={isPotencional ? "Potencionální" : "Klientem"}
                  color={isPotencional ? "warning" : "success"}
                  sx={{ height: "25px" }}
                />
              </TableCell>
            );
          }
          case "bold": {
            return (
              <TableCell key={cellKey}>
                <Typography fontWeight={600} key={cellIndex}>
                  {cell?.value}
                </Typography>
              </TableCell>
            );
          }
          default:
            return (
              <TableCell key={cellKey}>
                <Typography key={cellIndex}>{cell?.value}</Typography>
              </TableCell>
            );
        }
      })}
    </TableRow>
  );
};

export default GenerateTableRow;
