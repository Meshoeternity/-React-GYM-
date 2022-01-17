import Backgraond from "./components/Backgraond"
import Navbar from "./components/Navbar"
import axios from "axios"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "./App.css"
import SportsContext from "./utils/SportsContext"
import Signup from "./pages/Signup"
import Home from "./pages/Home"

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { useEffect, useState } from "react"
import AllSports from "./pages/AllSports"
import AllCoachs from "./pages/AllCoachs"

//---------------------------------------------------------------------------------------------------------------------------------------
function App() {
  const [sports, setSports] = useState([])
  const [profile, setProfile] = useState(null)
  const [coachs, setCoachs] = useState([])

  const navigate = useNavigate()
  //--------------------------------------------------------------------------------------------------------------------------------------
  const getSports = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/sports")
    setSports(response.data)
  }

  const getProfile = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenSports,
      },
    })
    setProfile(response.data)
  }

  const getCoachs = async () => {
    const response = await axios.get("https://gym-api-1.herokuapp.com/api/coachs")
    setCoachs(response.data)
  }

  //-------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    getSports()
    if (localStorage.tokenSports) getProfile()
    getCoachs()
  }, [])
  //--------------------------------------------------------------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------------------------------
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post("https://gym-api-1.herokuapp.com/api/auth/signup", userBody)
      console.log("signup success")
      toast.success("user created, plase check your email for verification")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //--------------------------------------------------------------------------------------------------------------

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("https://gym-api-1.herokuapp.com/api/auth/login", userBody)

      const token = response.data
      localStorage.tokenSports = token

      getProfile()
      console.log("login success")

      navigate("/home")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //----------------------------------------------------------------
  const logout = () => {
    localStorage.removeItem("tokenSports")
    console.log("logout success")
  }
  //------------------------------------------
  const subscribeClass = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const classId = form.elements.classes.value
      form.reset()
      await axios.post(
        `https://gym-api-1.herokuapp.com/api/classes/${classId}/sub-class`,
        {},
        {
          headers: {
            Authorization: localStorage.tokenSports,
          },
        }
      )
      getSports()
      getProfile()
      navigate("/profile")
      toast.success("Class added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------------------------------------------------------------------
  const deletesubscribeClass = async classId => {
    try {
      await axios.delete(`https://gym-api-1.herokuapp.com/api/classes/${classId}/sub-class`, {
        headers: {
          Authorization: localStorage.tokenSports,
        },
      })
      getSports()
      getProfile()
      navigate("/profile")
      toast.success("Class removed")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //-----------------------------------------------------------------------------------------------------
  const privtClass = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const privtclassId = form.elements.time.value

      form.reset()
      await axios.post(
        `https://gym-api-1.herokuapp.com/api/privtclass/${privtclassId}/sub-privtclass`,
        {},

        {
          headers: {
            Authorization: localStorage.tokenSports,
          },
        }
      )
      getSports()
      getProfile()
      navigate("/profile")
      toast.success("privtClass added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //----------------------------------------------------------------
  const deletesubscribePrivtClass = async privtclassId => {
    try {
      await axios.delete(`https://gym-api-1.herokuapp.com/api/privtclass/${privtclassId}/sub-privtclass`, {
        headers: {
          Authorization: localStorage.tokenSports,
        },
      })
      getSports()
      getProfile()
      navigate("/profile")
      toast.success("sub-privtclass removed")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //------------------------------------------------------
  const store = {
    sports,
    signup,
    login,
    logout,
    profile,
    coachs,
    subscribeClass,
    privtClass,
    deletesubscribeClass,
    deletesubscribePrivtClass,
  }

  return (
    <>
      <SportsContext.Provider value={store}>
        <ToastContainer />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sports" element={<AllSports />} />
          <Route path="/coachs" element={<AllCoachs />} />
        </Routes>
      </SportsContext.Provider>
    </>
  )
}

export default App
