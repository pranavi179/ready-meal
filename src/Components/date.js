import React from "react";
import "antd/dist/antd.css";

import { DatePicker, Button } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString, value) {
  console.log(date, dateString);
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

function Dates() {
  return (
    <div>
      <div style={{ padding: "24px" }}>
        <h3>Select the Date and time </h3>

        {/* <DatePicker onChange={onChange} />
        <br />
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <br /> */}
        <DatePicker
          showTime
          placeholder="Select Time and Date"
          onChange={onChange}
          onOk={onOk}
        />
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <WeekPicker onChange={onChange} placeholder="Select week" />
        <br />
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          placeholder={["Start Time", "End Time"]}
          onChange={onChange}
          onOk={onOk}
        />
      </div>
      <Button
        style={{
          backgroundColor: "#d9d9d9"
        }}
      >
        Submit
      </Button>
    </div>
  );
}
export default Dates;
