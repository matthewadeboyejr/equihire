import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/General/Landing";
import Login from "./Pages/General/Login";
import Register from "./Pages/General/Register";
import PickAccount from "./Pages/General/PickAccount";
import StartupOnboard from "./Pages/Startup/StartupOnboard";
import StartupDashboad from "./Pages/Startup/StartupDashboad";

import AddStartup from "./Pages/Startup/AddStartup";
import MyProfessionals from "./Pages/Startup/MyProfessionals";
import ProfessionalProfile from "./Pages/Startup/ProfessionalProfile";
import ProfessionalProjects from "./Pages/Startup/ProfessionalProjects";
import ProjectDetail from "./Pages/Startup/ProjectDetail";
import MyRequest from "./Pages/Startup/MyRequest";
import Requests from "./Pages/General/Requests";
import MyRequestDetail from "./Pages/Startup/MyRequestDetail";
import RequestDetail from "./Pages/General/RequestDetails";
import Professionals from "./Pages/General/Professionals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pick-account" element={<PickAccount />} />
      <Route path="/startup-onboard" element={<StartupOnboard />} />
      <Route path="/add-startup" element={<AddStartup />} />
      <Route path="/startup-dashboard" element={<StartupDashboad />} />
      <Route path="/my-request-detail" element={<MyRequestDetail />} />
      <Route path="/request-detail" element={<RequestDetail />} />
      <Route path="/my-professionals" element={<MyProfessionals />} />
      <Route path="/professionals" element={<Professionals />} />
      <Route path="/professional-projects" element={<ProfessionalProjects />} />
      <Route path="/professional-profile" element={<ProfessionalProfile />} />
      <Route path="/my-requests" element={<MyRequest />} />
      <Route path="/requests" element={<Requests />} />

      <Route path="/project-detail" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
