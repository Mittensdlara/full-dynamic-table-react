import { React, useState, useEffect } from "react";

/**
 * @param {{columns: {label: string, id: string}[], data: any[]}} props
 */
export default function Table(props) {
  // @TODO: implement these three features:
  //	1. Sorting by a column 🤕💔
  //	2. Filter by a Column (like a search)✅
  //	3. Pagination ✅

  // const arrayOfDatasId = props.data.id.map(data =>data.id)
  const arrayOfIds = props.columns.map((col) => col.id);

  // filtering state
  const [search, setSearch] = useState(" ");
  const [data, setData] = useState(props.data);

  // pagination sate
  const [pageSize, setPageSize] = useState(3)
  const [pageCount, setPageCount] = useState(Math.ceil(props.data.length / pageSize))
  const [currentPage, setCurrentPage] = useState(1);

  // sorting
  const [sortBy, setSortBy] = useState(null)
  const [sortAscending, setSortAscending] = useState(true)

  // filtering -> (client side filtering or server side filtering?)
  useEffect(() => {
    const newData = props.data.filter((d) =>
      Object.values(d).some((e) =>
        e.toString().toLowerCase().includes(search.toLowerCase())
      )
    );

    setData(newData)
  }, [search]);

  // pagination
  useEffect(() => {
    const startingIndex = (currentPage - 1) * pageSize
    const endingIndex = startingIndex + pageSize
    
    const newData = props.data.slice(startingIndex, endingIndex)
    setData(newData)
  }, [currentPage])

  // sorting
  useEffect(() => {
    const newData = props.data.sort((prev, cur) => {
      if (!sortBy)
        return 1

      if (sortAscending)
        return cur[sortBy].toString().localeCompare(prev[sortBy].toString())
      else
        return prev[sortBy].toString().localeCompare(cur[sortBy].toString())
    })

    setData(newData)
  }, [sortBy])

  return (
    <div className="container p-2 ">
      <div className=" flex p-2">
        <form onChange={(event) => setSearch(event.target.value)}>
          <input
            type="text"
            className="border-transparent rounded-full bg-purple-100 px-2 mx-4 "
          />
          <button className=" border shadow-xl bg-purple-900 text-white rounded-lg px-5 ">
            {" "}
            Search
          </button>
        </form>
      </div>
      <table width="100%" className="table table-bordered">
        <thead>
          <tr>
            {props.columns.map((col, idx) => (
              <th onClick={() => setSortBy(col.id)} key={idx}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="font-semibold text-sm">
          {data.map((person, idx) => (
            <tr key={`person_${idx}`}>
              {arrayOfIds.map((key, idx2) => (
                <td key={`person_${idx}_data_${idx2}`}>{person[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center text-sm">
          <ul className=" flex pagination pagination-lg">
            {[...Array(pageCount).keys()].map((pageNumber, idx) => (
              <li
                style={{ cursor: "pointer" }}
                className={`page-item ${pageNumber + 1 === currentPage && 'active'}`}
                key={`page_counter_${idx}`}
                onClick={() => setCurrentPage(pageNumber + 1)}
              >
                <span className="page-link">
                  {pageNumber + 1}
                </span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}