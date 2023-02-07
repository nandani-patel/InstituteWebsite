import React from "react"
import AboutCard from "../about/AboutCard"
import Hero from "./hero/Hero"
import OnlineCourses from "../allcourses/OnlineCourses"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard/>
      <OnlineCourses />
    </>
  )
}

export default Home
