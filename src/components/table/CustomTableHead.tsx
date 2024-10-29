import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { headCell } from "../../types/headcells";

interface ICustomTableHead {
  headcells: headCell[];
}

const CustomTableHead = ({ headcells }: ICustomTableHead) => {
  return (
    <TableHead>
      <TableRow>
        {headcells.map((item, i) => (
          <TableCell key={i}>
            <Typography fontWeight={700}>{item.label}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
