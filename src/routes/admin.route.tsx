import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicSemesters from "../pages/admin/academicManagement/AcademicSemesters";

// type TRoute = {
//   path: string;
//   element: ReactNode;
// };

// type TSideBarItem = {
//   key: string;
//   label: ReactNode;
//   children?: TSideBarItem[];
// };

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semesters",
        path: "academic-semesters",
        element: <AcademicSemesters />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Students",
    path: "students",
    element: <div>This is students page</div>,
  },
  {
    name: "Faculties",
    path: "faculties",
    element: (
      <div>
        <h2>This is Faculties page</h2>
      </div>
    ),
  },
];

// ADMIN ROUTES METHOD

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({ path: item.path, element: item.element });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({ path: child.path, element: child.element });
//     });
//   }
//   return acc;
// }, []);

// console.log(adminRoutes);

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSideBarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },

//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
