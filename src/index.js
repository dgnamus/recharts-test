import React from "react";
import { render } from "react-dom";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { year: 2018, earnings: 13200 },
  { year: 2019, earnings: 15600 },
  { year: 2020, earnings: 7650 }
];

const App = () => (
  <div>
    <h1>Average mothly income for hotel</h1>
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="year" />
      <YAxis dataKey="earnings" />
      <Bar dataKey="earnings" />
    </BarChart>
    ß
  </div>
);

render(<App />, document.getElementById("root"));
