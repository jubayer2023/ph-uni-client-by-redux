import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },

  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "create-admin",
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
      {
        key: "create-faculty",
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
      {
        key: "create-student",
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
    ],
  },
  {
    key: "Other",
    label: "Other",
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* Sider with Ant Design responsive handling */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onCollapse={(isCollapsed) => setCollapsed(isCollapsed)}
        trigger={null}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          PH Uni
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
