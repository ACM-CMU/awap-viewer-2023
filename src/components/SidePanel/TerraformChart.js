import { Stack } from "@mui/system"
import React, { useContext } from "react"

import Chart from "react-google-charts"
import { ViewerContext } from "../../pages/Viewer"

/*
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
    [8, 27, 200],
  */

const LineChartOptions = {
  //title: "Metal Reserves",
  //backgroundColor: '#F9B697',
  //title: 'Company Performance',
  //subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  backgroundColor: "#E27B58",
  chartArea: {
    backgroundColor: {
      // fill: "#F4F4F4",
      fill: "#E27B58",
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
      fontSize: 16,
      color: "#663926"
    },
  },
  vAxis: {
    title: "Terraformed Tiles",
    titleTextStyle: {
      fontName: "Roboto",
      fontStyle: "bold",
      italic: false,
      fontSize: 16,
      color: "#663926"
    },
    viewWindow: {
      min: 0,
    },
  },
  series: {},
}

function TerraformChart() {
  const { frame, redTerraform, blueTerraform } = useContext(ViewerContext)

  // var frameCurr = frame
  // if ((frame - parseInt(frame)) != 0) {
  //   console.log("parseInt" + parseInt(frame))
  //   console.log(frame - parseInt(frame))
  // }

  //LineData.push(['Frame', 'Blue Team', 'Red Team'])
  //LineData.push([0,0,0])
  // console.log("newLineData: " + newLineData)

  // console.log("redMetal: " + redMetal
  // console.log(framePlaying)
  const LineData = [
    ["Frame", "B", "R"],
    [0, 0, 0],
  ]

  for (let i = 0; i < frame; i++) {
    const temp = []
    temp.push(i)
    temp.push(blueTerraform[i])
    temp.push(redTerraform[i])
    LineData.push(temp)
  }

  return (
    <div className="container mt-3">
      <h2 style={{ fontSize: "3.5vmin", marginBottom: 0 }}>Terraform Graph</h2>
      <Stack alignItems="center" justifyContent="center">
        <Chart
          width={"380px"}
          height={"280px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ "data-testid": "3" }}
        />
      </Stack>
    </div>
  )
}
export default TerraformChart
