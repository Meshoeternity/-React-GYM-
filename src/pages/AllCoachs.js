import { useContext } from "react"
import { Row } from "react-bootstrap"
import CoachItem from "../components/CoachItem"
import SportsContext from "../utils/SportsContext"

function AllCoachs() {
  const { coachs } = useContext(SportsContext)
  console.log(coachs)

  return (
    <>
     <div>
        <img
          src="http://www.hdwallsource.com/img/2014/10/blurred-36379-37207-hd-wallpapers.jpg"
          style={{
            width: "100%",
            position: "absolute",
            zIndex: "-1",
            // height: "100vh",
            top: "0",
            minHeight:"100vh",
            backgroundsize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      {/* <Row>
        <h4 className="mt-5 mb-10">All COACHS</h4>
      </Row> */}
      <Row md={4}>
        {coachs.map(coach => (
          <CoachItem key={coach._id} coach={coach} />
        ))}
        {""}
      </Row>
    </>
  )
}

export default AllCoachs
