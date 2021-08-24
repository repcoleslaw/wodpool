import React from 'react'
import {useTable} from 'react-table'

function TestReactTable(props) {
  const data = React.useMemo(()=> [props.pool.competitor], [])

  const columns = React.useMemo(
    () => [
      {
        Header:"Handle",
        accesor:"handle",// accessor is the 'key' in the data
        Cell: props => (
          <>
          </>
        )
      },
      {
        Header:"Points",
        accesor:"pointsToDate",// accessor is the 'key' in the data
      },
    ], [])

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
