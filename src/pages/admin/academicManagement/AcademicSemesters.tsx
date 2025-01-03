import { useGetAllSemesterQuery } from "../../../redux/features/acdemicSemester/academicSemesterApi";

const AcademicSemesters = () => {
  const { data, isError } = useGetAllSemesterQuery(undefined);
  console.log("data from academic page =>", data);

  return (
    <div>
      <h3>This is academic semister page </h3>
    </div>
  );
};

export default AcademicSemesters;
