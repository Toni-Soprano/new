import React from "react";
import Footer from "./components/footer.js";
import Courses from "./interface/courses.js";
import Events from "./interface/events.js";
import Product from "./components/product.js";
import Forumlogin from "./components/forumlogin.js";
import Forumregister from "./components/forumregister.js";
import Instructorsidebar from "./components/instructorsidebar.js";
import Studentdash from "./interface/studentdash.js";
import Studentprofile from "./interface/studentprofile.js";
import Studentcourse from "./interface/studentcourse.js";
import Studentwishlist from "./interface/studentwishlist.js";
import Studentsettings from "./interface/studentsettings.js";
import Studentquiz from "./interface/studentquiz.js";
import Studentreviews from "./interface/studentreviews.js";
import Instructordash from "./interface/instructordash.js";
import Instructorcourses from "./interface/instructorcourses.js";
import Instructorsettings from "./interface/instructorsettings.js";
import Announcements from "./interface/announcements.js";
import Checkout from "./components/checkout.js";
import Landing from "./interface/landing.js";
import Admindash from "./interface/admindash.js";
import Adminsidebar from "./components/adminsidebar.js";
import Createcourse from "./interface/createcourse.js";
import AddLesson from "./components/addlesson.js";
import Addquizform from "./components/addquizform.js";
import Coursedetails from "./interface/coursedetails.js";
import Becometeacher from "./components/becometeacher.js";
import Updatepassword from "./components/updatepassword.js";
import Profile from "./components/profile.js";
import Lessona from "./components/lessonassignment.js";
import Lessonas from "./components/lessonassignmentsubmit.js";
import Lessonq from "./components/lessonquiz.js";
import Lessonqr from "./components/lessonquizresult.js";
import Lesson from "./components/lesson.js";
import Lessonintro from "./components/lessonintro.js";
import Studentsidebar from "./components/studentsidebar.js";
import Cart from "./components/cart.js";
import Card from "./components/card.js";
import Header from "./components/header.js";
import AddAssignment from "./components/addassignment.js";
import Createevent from "./interface/createevent.js";



function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Admindash />
      </div>
      <Footer />
    </div>
  );
}

export default App;
