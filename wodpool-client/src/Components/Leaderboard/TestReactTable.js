import React from 'react'
import {useTable} from 'react-table'

function TestReactTable(props) {

  const data = props.pool.competitors

  console.log(data)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Week',
        accessor: 'weeks.week', // accessor is the "key" in the data
      },
      {
        Header: 'Handle',
        accessor: 'handle', // accessor is the "key" in the data
      },
      {
        Header: 'Points',
        accessor: 'pointsToDate',
      },
    ],
    []
  )

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,

    } = useTable({ columns, data })
  
    console.log(rows)
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px white',
                    background: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        background: 'black',
                        color:'white',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

export default TestReactTable
