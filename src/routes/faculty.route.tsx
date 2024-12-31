export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: (
      <div>
        <h3>THis is Faculty Dashboard</h3>
      </div>
    ),
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: (
          <div>
            <h2>This is faculty create page from faculty role</h2>
          </div>
        ),
      },
      {
        name: "Create Student",
        path: "create-student",
        element: (
          <div>
            <h2>This is Student create page from faculty role</h2>
          </div>
        ),
      },
    ],
  },
];
