import React, { useState } from 'react';
import './DataTable.css';


const ASC_SORT = 'asc';
const DESC_SORT = 'desc';

const DataTable = (props) => {
  const { columns, fixedHeader, searching } = props;
  const [rowsData, setRowsData] = useState([...props.data]);
  const [currentSortColumn, setCurrentSortColumn] = useState({});
  const headerColumns = [];

  const checkIsValidType = (value) => typeof value === 'number' || typeof value === 'string';

  const checkIsSameInputs = (firstElement, secondElement) => {

    if (checkIsValidType(firstElement) && checkIsValidType(secondElement) && typeof firstElement === typeof secondElement) {
      return true;
    }

    return false;
  }


  const onSearch = (searchText) => {
    const regExp = new RegExp(searchText, 'i');
    const updatedValues = rowsData.filter((item) => {
      for (const key in item) {
        if (checkIsValidType(item[key]) && regExp.test(item[key])) {
          return true;
        }
      }
      return false;
    });
    setRowsData([...updatedValues]);
  }

  const handleSearch = (event) => {
    const { value } = event.currentTarget;
    if (value) {
      onSearch(value);
    } else {
      setRowsData([...props.data]);
    }
  }

  const sortColumn = (columnKey, sortBy) => {
    const dataTypeof = typeof rowsData[0][columnKey];
    let sortedRowsData = [...rowsData];
    if (sortBy === ASC_SORT) {
      if (dataTypeof === 'number') {
        sortedRowsData.sort((firstElement, secondElement) => {
          if (checkIsSameInputs(firstElement[columnKey], secondElement[columnKey])) {
            return firstElement[columnKey] - secondElement[columnKey];
          } else {
            throw new Error('Inconsistent data format');
          }
        });
      } else {
        sortedRowsData.sort((firstElement, secondElement) => {
          if (checkIsSameInputs(firstElement[columnKey], secondElement[columnKey])) {
            const firstValue = firstElement[columnKey].toLowerCase();
            const secondValue = secondElement[columnKey].toLowerCase();
            return firstValue < secondValue ? -1 : (firstValue > secondValue ? 1 : 0);
          } else {
            throw new Error('Inconsistent data format');
          }
        });
      }

    } else {
      if (dataTypeof === 'number') {
        sortedRowsData.sort((firstElement, secondElement) => {
          if (checkIsSameInputs(firstElement[columnKey], secondElement[columnKey])) {
            return secondElement[columnKey] - firstElement[columnKey];
          } else {
            throw new Error('Inconsistent data format');
          }
        });
      } else {
        sortedRowsData.sort((firstElement, secondElement) => {
          if (checkIsSameInputs(firstElement[columnKey], secondElement[columnKey])) {
            const firstValue = firstElement[columnKey].toLowerCase();
            const secondValue = secondElement[columnKey].toLowerCase();
            return secondValue < firstValue ? -1 : (secondValue > firstValue ? 1 : 0);
          } else {
            throw new Error('Inconsistent data format');
          }
        });
      }
    }
    setRowsData(sortedRowsData);
    setCurrentSortColumn({ [columnKey]: sortBy })

  }

  const onSortHandler = (columnIndex, columnKey, callback) => {
    const sortBy = currentSortColumn[columnKey]
      ? (currentSortColumn[columnKey] === ASC_SORT ? DESC_SORT : ASC_SORT)
      : ASC_SORT;
    try {
      sortColumn(columnKey, sortBy);
      if (callback) {
        callback(columnIndex, columnKey, sortBy);
      }
    } catch (error) {
      console.error(error);
    }


  }

  const renderTableHeader = (tableHeader) => {
    return tableHeader?.length ?
      <tr className="data-table-header">
        {
          tableHeader.map((item, index) => {
            headerColumns.push(item.key);

            return (
              <th
                key={`${item.value}-${index}`}
                className={`${fixedHeader ? 'fixed-header' : ''} ${item.fixed ? `fixed-column--${item.fixed}` : ''}`}
                data-header-cell-id={index}
                onClick={item?.sortable
                  ? (item?.customSortHandler
                    ? () => item.customSortHandler(index, item.key)
                    : () => onSortHandler(index, item.key, item?.onSort))
                  : null
                }
              >
                {item.title}
                {item.key in currentSortColumn ? (
                  <span
                    className={`sort--${currentSortColumn[item.key]}`}
                  />
                ) : null}
              </th>
            )
          })
        }
      </tr>
      : null;
  }


  const renderTableCells = (row, rowIndex) => {

    return headerColumns.map((columnKey, index) => (
      <td
        key={`${columnKey}-${index}`}
        className={`${columns[index].fixed ? `fixed-column--${columns[index].fixed}` : ''}`}
        data-cell-id={`${rowIndex}-${index}`}
      >
        {
          columnKey in row ?
            'customColumnLogic' in columns[index] ? (
              columns[index].customColumnLogic(row[columnKey])
            )
              : row[columnKey]
            : null
        }
      </td>
    ));
  }

  const renderTableBody = (rowsData) => {
    return rowsData?.length ?
      rowsData.map((row, index) => (
        <tr
          key={`row-${index}`}
          data-row-id={index}
        >
          {
            renderTableCells(row, index)
          }
        </tr>
      ))
      : 'No Records';
  }

  return (
    <div className="data-table__wrapper">
      {searching ? (
        <div className="data-table__header">
          <input className="data-table__search" type="search" placeholder="Search" onChange={handleSearch} />
        </div>
      ) : null}
      <div className="data-table__container">
        <table className="data-table">
          <thead>
            {renderTableHeader(columns)}
          </thead>
          <tbody>
            {renderTableBody(rowsData)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;