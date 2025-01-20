import Layout from "@/app/Layout";
import { Route, Routes } from "react-router-dom";
import DashboardAdminContent from "./DashboardAdminContent";
import Users from "./Users";
import Inventory from "./Inventory";

const AdminDashboard = () => {
  return (
    <div className="pl-[2rem]">
      <Layout>
        
        <Routes>
          <Route path="content" element={<DashboardAdminContent />} />
          <Route path="users" element={<Users />} />
          <Route path="inventory" element={<Inventory />} />
        </Routes>
       
      </Layout>
    </div>
  );
};

export default AdminDashboard;
