import { useContext } from "react"
import { Row } from "react-bootstrap"
import SportItem from "../components/SportItem"
import SportsContext from "../utils/SportsContext"

function AllSports() {
  const { sports } = useContext(SportsContext)
  // console.log(sports);
  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1574755851171-8959b8334d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          style={{
            width: "150%",
            position: "absolute",
            zIndex: "-1",
            // height: "100vh",
            minHeight:"150vh",
            top: "0",
            backgroundsize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* <Row>
        <h4 className="mt-5 mb-4">All Sports</h4>
      </Row> */}
      <Row md={5}>
        {sports.map(sport => (
          <SportItem sport={sport} key={sport._id} />
        ))}
      </Row>
    </>
  )
}

export default AllSports
