import { Skeleton, TableCell, TableRow } from "@mui/material";

interface ITableSkeleton {
  cellCount: number;
}

const renderCell = (count: number) => {
  const cells = [];
  for (let i = 0; i < count; i += 1) {
    cells.push(
      <TableCell key={i}>
        <Skeleton variant="text" />
      </TableCell>
    );
  }
  return cells;
};

const TableSkeleton = ({ cellCount }: ITableSkeleton) => {
  return <TableRow>{renderCell(cellCount)}</TableRow>;
};
export default TableSkeleton;
