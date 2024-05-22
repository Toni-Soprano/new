import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Forumlogin from "./Auth/forumlogin.js";
import Forumregister from "./Auth/forumregister.js";

import Courses from "./interface/course/courses.js";
import Events from "./interface/events.js";

import Studentdash from "./interface/student/studentdash.js";
import Studentprofile from "./interface/student/studentprofile.js";
import Studentcourse from "./interface/student/studentcourse.js";
import Studentsettings from "./interface/student/studentsettings.js";

import Studentquiz from "./interface/student/studentquiz.js";
import Instructordash from "./interface/instructor/instructordash.js";
import Instructorcourses from "./interface/instructor/instructorcourses.js";
import Instructorsettings from "./interface/instructor/instructorsettings.js";
import Checkout from "./components/checkout.js";
import Landing from "./interface/landing.js";
import Admindash from "./interface/admin/admindash.js";
import Adminsidebar from "./components/adminsidebar.js";
import Createcourse from "./interface/course/createcourse.js";
import AddLesson from "./components/addlesson.js";
import Addquizform from "./components/addquizform.js";
import Coursedetails from "./interface/course/coursedetails.js";
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
import Card from "./components/ss.js";
import Eventdetails from "./interface/eventdetails.js";
import AddAssignment from "./components/addassignment.js";
import Createevent from "./interface/course/createevent.js";
import AdminCourse from "./interface/admin/admincourse.js";
import PasswordRecovery from "./components/passwordrecovery.js";
import Adminorderhistory from "./interface/admin/adminorderhistory.js";
import Event from "./components/event.js";
import Adminannouncement from "./interface/admin/adminannouncement.js";
import VideoPreview from "./components/videopreview.js";
import Contact from "./components/contact.js";
import Instcourse from "./components/instcourse.js";
import Admininstructors from "./interface/admin/admininstructors.js";
import Instructorannouncement from "./interface/instructor/instructorannouncement.js";
import instructorassignments from "./interface/instructor/instructorassignments.js";
import Studentannouncements from "./interface/student/studentannouncements.js";

import AdminLogin from "./Auth/adminlogin.js";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/instcourse" element={<Instcourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/forumlogin" element={<Forumlogin />} />
        <Route path="/forumregister" element={<Forumregister />} />
        <Route path="/instructordash" element={<Instructordash />} />
        <Route path="/instructorsettings" element={<Instructorsettings />} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/videopreview" element={<VideoPreview />} />
        <Route path="/studentdash" element={<Studentdash />} />
        
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
        <Route path="/coursedetails/:id" element={<Coursedetails />} />

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
     
    </Router>
  );
}

export default App;
