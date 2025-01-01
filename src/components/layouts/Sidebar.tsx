import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenarator";
import { adminPaths } from "../../routes/admin.route";
import React from "react";
import { facultyPaths } from "../../routes/faculty.route";
import { studentPaths } from "../../routes/student.route";

const { Sider } = Layout;

interface TSidebarProps {
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar: React.FC<TSidebarProps> = ({ collapsed, setCollapsed }) => {
  const role = "admin";

  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, role);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, role);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, role);
      break;

    default:
      break;
  }

  return (
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
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
