import { TableCell, TableRow, Typography } from "@mui/material";

interface ITableNoRecordRow {
  headCount: number;
}

const TableNoRecordRow = ({ headCount }: ITableNoRecordRow) => {
  return (
    <TableRow>
      <TableCell colSpan={headCount}>
        <Typography align="center">Žádný záznam</Typography>
      </TableCell>
    </TableRow>
  );
};
export default TableNoRecordRow;
