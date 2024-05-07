import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
//import Card from './components/Card';
//import Courses from "./inerface/Courses"; //
//import Event from './components/event.js';
//import Events from "./inerface/events.js";
//import Product from "./components/product.js";
//import Products from "./inerface/products.js";
//import Forumlogin from "./components/forumlogin";
//import Forumregister from "./components/forumregister";
import Instructorsidebar from "./components/instructorsidebar";
//import Studentdash from "./interface/studentdash.js";
//import Studentprofile from "./interface/studentprofile.js";
//import Studentcourse from "./interface/studentcourse.js";
//import ecourse from "./components/ecourse.js";
//import Studentwishlist from "./interface/studentwishlist.js";
//import Wish from "./components/wish.js";
//import Studentwishlist from "./interface/studentsettings.js";
//import Studentsettings from "./interface/studentsettings.js";
//import Studentquiz from "./interface/studentquiz.js";
//import Studentreviews from "./interface/studentreviews.js";
import Instructordash from "./interface/instructordash.js";
//import Instructorcourses from "./interface/instructorcourses.js";
//import Instructorsettings from "./interface/instructorsettings.js";
//import Announcements from "./interface/announcements.js";
//import Cart from "./interface/cart.js";
//import Checkout from "./interface/checkout.js";
//import Landing from "./interface/landing.js";
//import Admindash from "./interface/admindash.js";
//import Adminsidebar from "./components/adminsidebar";
//import Createcourse from "./interface/createcourse.js";
//import Addquizform from "./components/addquizform.js";
//import CourseIntroVideo from "./components/courseintrovid.js";



function App() {
  return (
    <div>
      <Header />
      {/* Uncomment and use components as needed */}
      {/* <Card /> */}
      {/* <Courses /> */}
      {/* <Events />  <Event />*/}
      <Instructordash />
      <Footer />
    </div>
  );
}

export default App;
