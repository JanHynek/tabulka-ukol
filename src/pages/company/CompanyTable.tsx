import { MouseEvent, useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import { useRootStore } from "../../App";
import { debounce } from "lodash";

import { Paper, Stack, Table, TableBody, TableContainer } from "@mui/material";

import { companyHeadCells } from "./company-headcells";
import CustomTableHead from "../../components/table/CustomTableHead";
import GenerateTableRow from "../../components/table/GenerateTableRow";
import { getCells } from "../../utils/getCells";
import CustomTableFilters from "../../components/table/CustomTableFilters";
import CustomTablePagination from "../../components/table/CustomTablePagination";
import TableSkeleton from "../../components/table/TableSkeleton";

const CompanyTable = observer(() => {
  const { companyDataStore } = useRootStore();
  const headcells = companyHeadCells;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetch = useCallback(
    debounce((search, offset, limit) => {
      companyDataStore.fetchCompanies(search, offset, limit);
    }, 300),
    []
  );

  useEffect(() => {
    const offset = companyDataStore.page * companyDataStore.rowsPerPage;
    if (companyDataStore.search === "") {
      companyDataStore.fetchCompanies(
        companyDataStore.search,
        offset,
        companyDataStore.rowsPerPage
      );
    } else {
      debouncedFetch(
        companyDataStore.search,
        offset,
        companyDataStore.rowsPerPage
      );
    }

    return () => {
      companyDataStore.resetCompanies();
      debouncedFetch.cancel();
    };
  }, [
    companyDataStore,
    debouncedFetch,
    companyDataStore.search,
    companyDataStore.page,
    companyDataStore.rowsPerPage,
  ]);

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    companyDataStore.setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    companyDataStore.setRowsPerPage(Number(event.target.value));
    companyDataStore.setPage(0);
  };

  return (
    <Stack>
      <CustomTableFilters
        value={companyDataStore.search}
        onChange={(e) => companyDataStore.setSearch(e.target.value)}
      />

      <Paper>
        <TableContainer>
          <Table>
            <CustomTableHead headcells={headcells} />

            <TableBody>
              {companyDataStore.loading ? (
                <TableSkeleton cellCount={headcells.length} />
              ) : (
                companyDataStore.companies?.data?.map((row, index) => {
                  const cells = getCells(headcells, row);
                  return (
                    <GenerateTableRow
                      key={index}
                      rowData={row}
                      cells={cells}
                      index={index}
                    />
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomTablePagination
          totalCount={companyDataStore.companies?.totalCount}
          page={companyDataStore.page}
          rowsPerPage={companyDataStore.rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Stack>
  );
});
export default CompanyTable;
