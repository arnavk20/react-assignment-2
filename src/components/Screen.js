import { useContext } from "react"
import { CalcContext } from "../Context/CalcContext"
const Screen=()=>{
    const { calc } = useContext(CalcContext);

    return (
      <div>
        <div className="screen" max={35}  mode="multi">{calc.num ? calc.num : calc.res}</div>
      </div>
    )
}
export default Screen;