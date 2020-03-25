import React from "react"
import Triangle from "./triangle"
import Pentagon from "./pentagon"
import Circle from "./circle"
import Square from "./square"

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      overflow: "hidden",
    }}
  >
    <Triangle style={{ width: "250px", height: "250px" }} />
    <Pentagon style={{ width: "300px", height: "300px" }} />
    <Circle style={{ width: "400px", height: "400px" }} />
    <Square style={{ width: "300px", height: "300px" }} />
    <Triangle style={{ width: "250px", height: "250px" }} />
    <Pentagon style={{ width: "300px", height: "300px" }} />
    <Circle style={{ width: "400px", height: "400px" }} />
    <Square style={{ width: "300px", height: "300px" }} />
  </div>
)
