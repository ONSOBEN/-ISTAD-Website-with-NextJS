import { Courses } from "@/app/interface/CoursePage";
import { Card } from "flowbite-react";
import { IoTime } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa";

type CourseProps = {
  courses: Courses[];
};

const CourseCardComponent = ({ courses }: CourseProps) => {
  return (
    <section className="container mx-auto">
      <h1 className="uppercase text-3xl font-extrabold pl-48 mb-4">Course</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
          >
            <img
              className="w-full h-48 object-cover"
              src={course?.image || "NO Image"}
              alt="Course image"
            />
            <div className="p-6">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 mb-2">
                {course?.title || "Default Title"}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2 mb-4">
                {course?.description || "Default Description"}
              </p>
              <div className="flex items-center mb-2">
                <FaLayerGroup />
                <p className="pl-1 text-gray-600 dark:text-gray-400">Medium</p>
              </div>
              <div className="flex items-center">
                <IoTime />
                <p className="pl-1 text-gray-600 dark:text-gray-400">60 hour</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CourseCardComponent;
