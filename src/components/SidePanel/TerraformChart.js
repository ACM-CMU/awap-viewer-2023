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
      color: "#663926"
    },
    baselineColor: "#421f0f",
    gridlines: {
      color: "#663926"
    },
    minorGridlines: {
      color: "#92624e"
    },
    textStyle: {
      color: "#663926"
    }
  },
  vAxis: {
    title: "Terraformed Tiles",
    titleTextStyle: {
      fontName: "Roboto",
      fontStyle: "bold",
      italic: false,
      fontSize: 15,
      color: "#663926"
    },
    viewWindow: {
      min: 0,
    },
    baselineColor: "#421f0f",
    gridlines: {
      color: "#663926"
    },
    minorGridlines: {
      color: "#92624e"
    },
    textStyle: {
      color: "#663926"
    }
  },
  legend: {
    textStyle: {
      fontName: "Roboto",
      fontStyle: "bold",
      fontSize: 12,
      color: "#663926"
    }
  },
  series: {},
}

function TerraformChart() {
  const { frame, redTerraform, blueTerraform } = useContext(ViewerContext)

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
      <h2 style={{ fontSize: "3.5vmin", marginBottom: 18 }}>Terraform Graph</h2>
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
