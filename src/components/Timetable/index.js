import "./timetable.css";
import React, { useEffect, useState } from "react";
import { data } from "./data";
export default function App() {
  // Creating an array for all the slots user selects
  let [selectedArr, setSelectedArr] = useState([]);

  useEffect(() => {
    console.log(selectedArr, "slec");
  }, [selectedArr]);
  //handle the slot selection by creating a new filtered array
  const handleSelectElement = (elem_name) => {
    if (selectedArr.includes(elem_name)) {
      const filter_arr = selectedArr.filter((elem) => elem !== elem_name);
      setSelectedArr(filter_arr);
      return;
    }
    setSelectedArr([...selectedArr, elem_name]);
  };
//selected slots to look like
  const selectedCellStyle = {
    border: "1px solid ",
    cursor: "pointer",
    backgroundColor: "#9698ed",
    //f8a102 same color theme as the rest
  };
// all cells to look like
  const unselectedCellStyle = {
    backgroundColor: "#F9CDAD",
    borderStyle: "solid",
    borderWidth: "1px",
    fontFamily: "Arial sans-serif",
    fontSize: "14px",
    overflow: "hidden",
    padding: "20px 20px",
    wordBreak: "normal",

    cursor: "pointer",

    borderColor: "#fe996b",
    color: "#002b36",
    textAlign: "left",
    verticalAlign: "top",
  };

  return (
    <div className="App">
      <table className="tg">
        {/* table beginning */}
        <thead>
          <tr>
            <td className="tg-rwmj">
              <span style={{ fontWeight: "bold" }}>THEORY </span>
              <p>
                <span style={{ fontWeight: "bold" }}>HOURS</span>
              </p>
            </td>
            {/* Timings for all slots  */}
            <td className="tg-zfe6">
             
              8:00 AM <p>to </p>8:50 AM
            </td>
            <td className="tg-zfe6">
              8:55 AM<p>to </p>9:45 AM
            </td>
            <td className="tg-zfe6">
              9:50 AM<p>to </p>10:40 AM
            </td>
            <td className="tg-zfe6">
              10:45 AM <p>to</p>11:35 AM
            </td>
            <td className="tg-zfe6">
              11:40 AM<p>to </p>12:30 PM
            </td>
            <td className="tg-zfe6">
              12:35 PM<p>to</p>1:25 PM
            </td>
            {/* Lunch timings */}
            {/* <td className="tg-zfe6"></td> */}
            <td className="tg-zfe6">
              2:00 PM <p>to </p>2:50 PM
            </td>
            <td className="tg-zfe6">
              2:55 PM<p>to </p>3:45 PM
            </td>
            <td className="tg-zfe6">
              3:50 PM <p>to </p>4:40 PM
            </td>
            <td className="tg-zfe6">
              4:45 PM <p>to </p>5:35 PM
            </td>
            <td className="tg-zfe6">
              {" "}
              5:40 PM <p>to </p>6:30 PM
            </td>
            <td className="tg-zfe6">
              6:35 PM <p>to</p>7:25 PM
            </td>
          </tr>
          <tr>
            <td className="tg-rwmj">
              <span style={{ fontWeight: "bold" }}>LAB </span>
              <p>
                <span style={{ fontWeight: "bold" }}>HOURS</span>
              </p>
            </td>
            <td className="tg-zfe6">
              8:00 AM <p>to </p>8:50 AM
            </td>
            <td className="tg-zfe6">
              8:50 AM<p>to </p>9:40 AM
            </td>
            <td className="tg-zfe6">
              9:50 AM <p>to</p>10:40 AM
            </td>
            <td className="tg-zfe6">
              10:40 AM<p>to</p>11:30 AM
            </td>
            <td className="tg-zfe6">
              11:40 AM<p>to </p>12:30 PM
            </td>
            <td className="tg-zfe6">
              12:30 PM <p>to </p>1:20 PM
            </td>
            {/* Lunch timings */}
            {/* <td className="tg-f66q"></td> */}
            <td className="tg-zfe6">
              2:00 PM<p>to </p>2:50 PM
            </td>
            <td className="tg-zfe6">
              2:50 PM<p>to</p>3:40 PM
            </td>
            <td className="tg-zfe6">
              3:50 PM<p>to</p>4:40 PM
            </td>
            <td className="tg-zfe6">
              4:40 PM<p>to</p>5:30 PM
            </td>
            <td className="tg-zfe6">
              5:40 PM<p>to</p>6:30 PM
            </td>
            <td className="tg-fujf">
              6:30 PM <p>to </p>7:20 PM
            </td>
          </tr>
        </thead>
        <tbody>
          {/* All slots to be traversed and pulled from the array of objects data in data.js */}
          {data.map((row) => (
            <tr>
               <td className="tg-rwmj"><span  style={{fontWeight:"bold"}}>{row.day}</span></td>
             
              {row.list.map((cell) => (
                <td
                  onClick={() => {
                    handleSelectElement(cell);
                  }}
                  style={
                    // check if the cell is selected or not and accordingly apply the style
                    selectedArr.includes(cell)
                      ? selectedCellStyle
                      : unselectedCellStyle
                  }
                  className="tg-td0e"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
