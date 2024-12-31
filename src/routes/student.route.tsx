export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: (
      <div>
        <h3>This is Student Dashboard from student role</h3>
      </div>
    ),
  },
  {
    name: "User Management",
    children: [
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: (
          <div>
            <h2>This is student offered course page from student role</h2>
          </div>
        ),
      },
      {
        name: "Alumny student",
        path: "alumny-student",
        element: (
          <div>
            <h2>This is Student Alumny page from student role</h2>
          </div>
        ),
      },
    ],
  },
];
