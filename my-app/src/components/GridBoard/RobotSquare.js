import React, { useContext } from "react"
import { ViewerContext } from "../../pages/Viewer"
import "./Grid.css"
import "./Tooltip.css"

export default function RobotSquare(props) {
  const { srcImg, x, y, type, hasRobot, battery} = props
  const { setCol, setRow, tiles} = useContext(ViewerContext)

  const handleHover = (col, row) => {
    setCol(col)
    setRow(row)
    console.log(col, row)
    if (col != null && row != null) {
      console.log(tiles[row][col], type, battery)
    }
  }
  
  return (
    <div className="tile-div">
      {hasRobot ? (
        <img
          id={`robot${x}${y}`}
          src={srcImg}
          alt=""
          className="grid-square"
          onMouseOver={() => {
            handleHover(x, y)
          }}
          onMouseOut={() => {
            handleHover(null, null)
          }}
        />
      ) : (
        <div
          id={`robot${x}${y}`}
          className="grid-square"
          onMouseOver={() => {
            handleHover(x, y)
          }}
          onMouseOut={() => {
            handleHover(null, null)
          }}
        ><span className="tooltiptext">Tooltip text</span></div>
      )}
    </div>
  )
}
