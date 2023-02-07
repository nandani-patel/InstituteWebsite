import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import AboutCard from "./components/about/AboutCard"
import OnlineCourses from "./components/allcourses/OnlineCourses"
import CourseCard from "./components/allcourses/CoursesCard"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutCard} />
          <Route exact path='/courses' component={CourseCard} />
          <Route exact path='/departments' component={OnlineCourses} />
        </Switch>
      </Router>
    </>
  )
}

export default App
