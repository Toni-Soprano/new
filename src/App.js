import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Courses from "./interface/courses.js";
import Events from "./interface/events.js";
import Forumlogin from "./components/forumlogin.js";
import Forumregister from "./components/forumregister.js";
import Studentdash from "./interface/studentdash.js";
import Studentprofile from "./interface/studentprofile.js";
import Studentcourse from "./interface/studentcourse.js";
import Studentsettings from "./interface/studentsettings.js";
import Studentquiz from "./interface/studentquiz.js";
import Instructordash from "./interface/instructordash.js";
import Instructorcourses from "./interface/instructorcourses.js";
import Instructorsettings from "./interface/instructorsettings.js";
import Checkout from "./components/checkout.js";
import Landing from "./interface/landing.js";
import Admindash from "./interface/admindash.js";
import Adminsidebar from "./components/adminsidebar.js";
import Createcourse from "./interface/createcourse.js";
import AddLesson from "./components/addlesson.js";
import Addquizform from "./components/addquizform.js";
import Coursedetails from "./interface/coursedetails.js";
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
import Eventdetails from "./interface/eventdetails.js";
import AddAssignment from "./components/addassignment.js";
import Createevent from "./interface/createevent.js";
import AdminCourse from "./interface/admincourse.js";
import PasswordRecovery from "./components/passwordrecovery.js";
import Adminorderhistory from "./interface/adminorderhistory.js";
import Event from "./components/event.js";
import Adminannouncement from "./interface/adminannouncement.js";
import VideoPreview from "./components/videopreview.js";
import Contact from "./components/contact.js";
import Instcourse from "./components/instcourse.js";
import Admininstructors from "./interface/admininstructors.js";
import Instructorannouncement from "./interface/instructorannouncement.js";
import instructorassignments from "./interface/instructorassignments.js";
import Studentannouncements from "./interface/studentannouncements.js";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/instcourse" element={<Instcourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/forumlogin" element={<Forumlogin />} />
        <Route path="/forumregister" element={<Forumregister />} />
        <Route path="/instructordash" element={<Instructordash />} />
        <Route path="/instructorsettings" element={<Instructorsettings />} />

        <Route path="/videopreview" element={<VideoPreview />} />
        <Route path="/studentdash" element={<Studentdash />} />
        <Route path="/studentprofile" element={<Studentprofile />} />
        <Route path="/studentcourse" element={<Studentcourse />} />
        <Route path="/studentsettings" element={<Studentsettings />} />
        <Route path="/studentquiz" element={<Studentquiz />} />
        <Route path="/instructorcourses" element={<Instructorcourses />} />
        <Route path="/admininstructors" element={<Admininstructors />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admindash" element={<Admindash />} />
        <Route path="/admincourse" element={<AdminCourse />} />
        <Route path="/createcourse" element={<Createcourse />} />
        <Route path="/addlesson" element={<AddLesson />} />
        <Route path="/addquizform" element={<Addquizform />} />
        <Route path="/coursedetails" element={<Coursedetails />} />
        <Route path="/updatepassword" element={<Updatepassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lessona" element={<Lessona />} />
        <Route path="/lessonas" element={<Lessonas />} />
        <Route path="/lessonq" element={<Lessonq />} />
        <Route path="/lessonqr" element={<Lessonqr />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/lessonintro" element={<Lessonintro />} />
        <Route path="/studentsidebar" element={<Studentsidebar />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/card" element={<Card />} />
        <Route path="/eventdetails" element={<Eventdetails />} />
        <Route path="/addassignment" element={<AddAssignment />} />
        <Route path="/createevent" element={<Createevent />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/adminorderhistory" element={<Adminorderhistory />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studentannouncements" element={<Studentannouncements />} />

        <Route path="/adminannouncement" element={<Adminannouncement />} />
        <Route
          path="/instructorannouncement"
          element={<Instructorannouncement />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
