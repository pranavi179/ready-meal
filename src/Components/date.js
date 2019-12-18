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
function onSubmit(value) {
  console.log("onSubmit:", value);
}

export default class Dates extends React.Component {
  // save = e => {
  //   console.log("it works!");
  //   e.preventDefault();
  // };
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A dates was submitted: " + this.state.value);
    event.preventDefault();
    console.log("the dates was submited:");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ padding: "24px" }}>
            {/* <DatePicker onChange={onChange} />
        <br />
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <br /> */}
            <label>
              <h4> Select the Date and time you want to get delivered :</h4>{" "}
              <DatePicker
                showTime
                placeholder="Select Time and Date"
                onChange={onChange}
                onOk={onOk}
              />
            </label>
            <br />
            <h4>Select how many days you want </h4>
            <RangePicker onChange={onChange} onOk={onOk} />
            <br />
            <h4>Even You can select the week too</h4>
            <WeekPicker
              onChange={onChange}
              onOk={onOk}
              placeholder="Select week"
            />
            <br />
            {/* <RangePicker
            showTime={{ format: "HH:mm" }}
            format="YYYY-MM-DD HH:mm"
            placeholder={["Start Time", "End Time"]}
            onChange={onChange}
            onOk={onOk}
          /> */}
          </div>
          <Button
            type="submit"
            style={{
              backgroundColor: "#d9d9d9"
            }}
          >
            Submit
          </Button>
          {/* <input type="submit" value="Submit"></input> */}
        </form>
      </div>
    );
  }
}

// import React from "react";
// import ReactDOM from "react-dom";
// import "antd/dist/antd.css";

// import { Form, DatePicker, TimePicker, Button } from "antd";

// const { MonthPicker, RangePicker } = DatePicker;

// class Date extends React.Component {
//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.form.validateFields((err, fieldsValue) => {
//       if (err) {
//         return;
//       }

//       // Should format date value before submit.
//       const rangeValue = fieldsValue["range-picker"];
//       const rangeTimeValue = fieldsValue["range-time-picker"];
//       const values = {
//         ...fieldsValue,
//         "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
//         "date-time-picker": fieldsValue["date-time-picker"].format(
//           "YYYY-MM-DD HH:mm:ss"
//         ),
//         "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
//         "range-picker": [
//           rangeValue[0].format("YYYY-MM-DD"),
//           rangeValue[1].format("YYYY-MM-DD")
//         ],
//         "range-time-picker": [
//           rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
//           rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
//         ],
//         "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
//       };
//       console.log("Received values of form: ", values);
//     });
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const formItemLayout = {
//       labelCol: {
//         xs: { span: 24 },
//         sm: { span: 8 }
//       },
//       wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 16 }
//       }
//     };
//     const config = {
//       rules: [
//         { type: "object", required: true, message: "Please select time!" }
//       ]
//     };
//     const rangeConfig = {
//       rules: [{ type: "array", required: true, message: "Please select time!" }]
//     };
//     return (
//       <Form {...formItemLayout} onSubmit={this.handleSubmit}>
//         {/* <Form.Item label="DatePicker">
//           {getFieldDecorator("date-picker", config)(<DatePicker />)}
//         </Form.Item> */}
//         <Form.Item label="SELECT DATE & TIME">
//           {getFieldDecorator(
//             "date-time-picker",
//             config
//           )(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
//         </Form.Item>
//         {/* <Form.Item label="MonthPicker">
//           {getFieldDecorator("month-picker", config)(<MonthPicker />)}
//         </Form.Item>
//         <Form.Item label="RangePicker">
//           {getFieldDecorator("range-picker", rangeConfig)(<RangePicker />)}
//         </Form.Item> */}
//         <Form.Item label="SELECT THE DAYS ">
//           {getFieldDecorator(
//             "range-time-picker",
//             rangeConfig
//           )(<RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
//         </Form.Item>
//         {/* <Form.Item label="TimePicker">
//           {getFieldDecorator("time-picker", config)(<TimePicker />)}
//         </Form.Item> */}
//         <Form.Item
//           wrapperCol={{
//             xs: { span: 24, offset: 0 },
//             sm: { span: 16, offset: 8 }
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// const WrappedTimeRelatedForm = Form.create({ name: "time_related_controls" })(
//   Date
// );
// export default WrappedTimeRelatedForm;
