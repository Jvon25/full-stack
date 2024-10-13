import React, { useState } from "react";
import Filter from "./components/Filter"
import DataTable from "./components/StudentTable"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [minDate, setMinDate] = useState("")
  const [maxDate, setMaxDate] = useState("")

  const studentsData = [
    { lastName: "Berdin", firstName: "Jvon Clint", course: "BSIT", birthdate: "2003-10-23" },
    { lastName: "Berdin", firstName: "Khalil Scott", course: "BSIS", birthdate: "2002-08-05" },
    { lastName: "Villarba", firstName: "Jan Marie", course: "BSCS", birthdate: "2004-03-10" },
    { lastName: "Talara", firstName: "Altea Mouriel", course: "BSDS", birthdate: "2001-07-25" },
    { lastName: "Favis", firstName: "Mavin", course: "BSDS", birthdate: "2001-06-10" },
  ]

  return (
    <div>
      <h1>Student Data Table</h1>
      <Filter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        minDate={minDate} 
        setMinDate={setMinDate} 
        maxDate={maxDate} 
        setMaxDate={setMaxDate}
      />
      <DataTable 
        students={studentsData}
        searchTerm={searchTerm} 
        minDate={minDate} 
        maxDate={maxDate} 
      />
    </div>
  )
}

export default App
