import React, { useContext } from "react"

import Stack from "@mui/material/Stack"
import Chart from "react-google-charts"
import { ViewerContext } from "../../pages/Viewer"

const LineChartOptions = {
  backgroundColor: {
    fill: "#F9B697",
    stroke: "#663926",
    strokeWidth: 2,
  },
  chartArea: {
    top: 40,
    left: 80,
    backgroundColor: {
      fill: "#F9B697",
      opacity: 100,
    },
  },

  titleTextStyle: {
    fontName: "Impact",
    fontSize: 20,
  },

  hAxis: {
    title: "Frame",
    titleTextStyle: {
      fontName: "Roboto",
      fontStyle: "bold",
      italic: false,
      fontSize: 15,
      color: "#663926",
    },
    baselineColor: "#421f0f",
    gridlines: {
      color: "#663926",
    },
    minorGridlines: {
      color: "#92624e",
    },
    textStyle: {
      color: "#663926",
    },
  },
  vAxis: {
    title: "Terraformed Tiles",
    titleTextStyle: {
      fontName: "Roboto",
      fontStyle: "bold",
      italic: false,
      fontSize: 15,
      color: "#663926",
    },
    viewWindow: {
      min: 0,
    },
    baselineColor: "#421f0f",
    gridlines: {
      color: "#663926",
    },
    minorGridlines: {
      color: "#92624e",
    },
    textStyle: {
      color: "#663926",
    },
  },
  legend: {
    textStyle: {
      fontName: "Roboto",
      fontStyle: "bold",
      fontSize: 12,
      color: "#663926",
    },
  },
  series: {},
}

function LineChart() {
  const { frame, setFrame, redMetal, blueMetal, setRedMetal, setBlueMetal } =
    useContext(ViewerContext)

  const LineData = [
    ["Frame", "B", "R"],
    [0, 0, 0],
  ]

  for (let i = 0; i < frame; i++) {
    const temp = []
    temp.push(i)
    temp.push(blueMetal[i])
    temp.push(redMetal[i])
    LineData.push(temp)
  }

  return (
    <div>
      <div className="vert-container graph">
        <h2 style={{ fontSize: "3vmin", margin: "0 1 18 1" }}>Metal Graph</h2>
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ "data-testid": "3" }}
          style={{ paddingBottom: 40 }}
        />
      </div>
    </div>
  )
}
export default LineChart

//<h1>{redMetal}</h1>
