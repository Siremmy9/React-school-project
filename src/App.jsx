import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminAdmissions from "./admin/pages/AdminAdmissions";
import AdminStudents from "./admin/pages/AdminStudents";
import AdminStaff from "./admin/pages/AdminStaff";
import AdminMessages from "./admin/pages/AdminMessages";
import AdminNews from "./admin/pages/AdminNews";
import AdminActivities from "./admin/pages/AdminActivities";

export default function App() {
  return (
    <>
      {" "}
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/news" element={<News />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="admissions" element={<AdminAdmissions />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="staff" element={<AdminStaff />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="activities" element={<AdminActivities />} />
        </Route>
      </Routes>
    </>
  );
}
