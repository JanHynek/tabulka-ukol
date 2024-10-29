import { TablePagination } from "@mui/material";

interface ICustomTablePagination {
  totalCount: number | undefined;
  rowsPerPage: number;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  onRowsPerPageChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

const CustomTablePagination = ({
  totalCount,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}: ICustomTablePagination) => {
  return (
    <TablePagination
      labelRowsPerPage="Záznamů na stránku"
      labelDisplayedRows={({ from, to, count }) => {
        return "" + from + "-" + to + " z " + count;
      }}
      rowsPerPageOptions={[2, 10, 25]}
      component="div"
      count={totalCount ?? 0}
      rowsPerPage={rowsPerPage}
      page={!totalCount || totalCount <= 0 ? 0 : page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default CustomTablePagination;
