import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const { Header, Content } = Layout;

// const items = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },

//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "create-admin",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "create-faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "create-student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//     ],
//   },
//   {
//     key: "Other",
//     label: "Other",
//   },
// ];

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logout successfull", { duration: 1000 });
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* Sider with Ant Design responsive handling */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        {/* Header with custom trigger button */}
        <Header style={{ padding: 0, background: "#001529" }}>
          <div
            style={{
              padding: "0 16px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ padding: "0px 20px" }}>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
            {collapsed ? (
              <MenuUnfoldOutlined
                style={{ fontSize: "18px", color: "white", cursor: "pointer" }}
                onClick={toggleCollapsed}
              />
            ) : (
              <MenuFoldOutlined
                style={{ fontSize: "18px", color: "white", cursor: "pointer" }}
                onClick={toggleCollapsed}
              />
            )}
          </div>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
