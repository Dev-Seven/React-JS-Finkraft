import React, { useEffect } from "react";
import {
  useSortBy,
  useTable,
  useRowSelect,
  usePagination,
  useExpanded,
} from "react-table";
import Up from "../assets/images/up.png";
import Down from "../assets/images/down.png";

const button =
  "font-sans font-semibold lg:text-lg sm:text-xs md:text-sm rounded lg:h-12 sm:h-8 md:h-10 px-6";

export default function Table(props) {
  const Collapse = (row) => props.collapseComponent(row);
  const data = React.useMemo(() => [...props.data], [props.data]);
  const columns = React.useMemo(() => [...props.columns], [props.columns]);
  const RowSubComponent = React.useCallback(({ row }) => {
    return <Collapse row={row} />;
  }, []);
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input
            type="checkbox"
            ref={resolvedRef}
            className={props.checkBoxClass}
            style={[{ color: "#2F2D51" }]}
            {...rest}
          />
        </>
      );
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {},
    },
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    props.checkBox
      ? (hooks) => {
          hooks.visibleColumns.push((columns) => [
            // Let's make a column for selection
            {
              id: "selection",
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                  <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                </div>
              ),
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: ({ row }) => (
                <div>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </div>
              ),
            },
            ...columns,
          ]);
        }
      : () => {}
  );
  useEffect(() => {
    return () => {};
  }, [props.data]);

  return (
    <>
      {props.rowSelection && (
        <select
          value={pageSize}
          className={
            button + "flex gap-3 items-center border border-current my-2"
          }
          style={{ color: "#4B5660", borderColor: "#D9D9D9" }}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 15, 20, "All"].map((pageDataSize) => (
            <option
              key={pageDataSize}
              value={pageDataSize === "All" ? props.data.length : pageDataSize}
            >
              {pageDataSize}
            </option>
          ))}
        </select>
      )}
      <table {...getTableProps()} className="w-full">
        <thead className="bg-transparent shadow-md rounded-xl">
          {headerGroups.map((headerGroup, i) => (
            <tr
              key={i}
              className="font-sans text-sm font-semibold text-left sm:text-sm md:text-base 2xl:text-base xl:text-base lg:text-lg"
              style={{ color: "#2F2D51", backgroundColor: "#F0F0F0" }}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, i) => (
                <th
                  key={i}
                  className="px-5 py-3 mx-auto "
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <div
                    className={
                      column.id !== "selection"
                        ? "flex items-center gap-2 mx-auto"
                        : "flex items-center gap-2"
                    }
                  >
                    <span>{column.render("Header")}</span>
                    {column.id !== "selection" && column.id !== "action" ? (
                      column.isSortedDesc ? (
                        <img src={Down} />
                      ) : (
                        <img src={Up} />
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="" {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <React.Fragment {...row.getRowProps()}>
                <tr
                  key={i}
                  className="font-sans text-sm font-normal text-left shadow-md sm:text-sm md:text-base 2xl:text-base xl:text-base lg:text-lg rounded-xl"
                  style={{ color: "#525353" }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td className="px-5 py-5" {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      <RowSubComponent row={row.values} />
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {props.pagination && (
        <div className="items-center justify-end inline-block gap-4 mt-5 sm:flex md:flex lg:flex xl:flex 2xl:flex">
          <div>
            {page.length > 0 && (
              <p class="text-base sm:text-lg font-sans " color="#525353">
                Showing{"  "}
                <span class="font-medium">{parseInt(page[0].id) + 1}</span>
                {"  "}
                to{"  "}
                <span class="font-medium">
                  {parseInt(page[page.length - 1].id) + 1}
                </span>
                {"  "}
                of{"  "}
                <span class="font-medium">{data.length}</span>
                {"  "}Results
              </p>
            )}
          </div>
          <div className="w-3/4 my-3 sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">
            <button
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>
            <span>
              {pageOptions.length > 4
                ? pageOptions
                    .slice(
                      pageIndex > pageOptions.length - 5
                        ? pageOptions.length - 5
                        : pageIndex,
                      pageIndex + 5 > pageOptions.length
                        ? pageOptions.length
                        : pageIndex + 5
                    )
                    .map((currentPage, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => gotoPage(currentPage)}
                          aria-current="page"
                          className={
                            pageIndex !== currentPage
                              ? "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                              : "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                          }
                        >
                          {currentPage + 1}
                        </button>
                      );
                    })
                : pageOptions.map((currentPage, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => gotoPage(currentPage)}
                        aria-current="page"
                        className={
                          pageIndex !== currentPage
                            ? "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            : "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        }
                      >
                        {currentPage + 1}
                      </button>
                    );
                  })}
            </span>
            <button
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
