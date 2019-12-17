import React from "react";
import "antd/dist/antd.css";

import { DatePicker } from "antd";

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
        <DatePicker onChange={onChange} />
        <br />
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <WeekPicker onChange={onChange} placeholder="Select week" />
      </div>
      <div>
        <DatePicker
          showTime
          placeholder="Select Time"
          onChange={onChange}
          onOk={onOk}
        />
        <br />
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          placeholder={["Start Time", "End Time"]}
          onChange={onChange}
          onOk={onOk}
        />
      </div>
    </div>
  );
}
export default Dates;
