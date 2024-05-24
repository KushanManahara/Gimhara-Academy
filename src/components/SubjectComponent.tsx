import React from "react";
import { Link } from "react-router-dom"; // IMPORT LINK FOR NAVIGATION

import { SubjectCategory } from "../Models/types";
import Title from "./Title";

const SubjectComponent: React.FC<SubjectCategory> = ({
  category,
  subjects,
}) => {
  // CREATE FUNCTIONAL COMPONENT
  return (
    <div className="bg-white">
      {/* <Title text={`${category} Category`} /> DISPLAY CATEGORY TITLE */}
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <header className="bg-white shadow text-2xl mt-3 mb-8">
          <h1>{category}</h1> {/* DISPLAY CATEGORY HEADING */}
        </header>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {subjects.map(
            (
              subject // MAP THROUGH SUBJECTS ARRAY
            ) => (
              <Link key={subject.id} to={`./courses#/${subject.id}`}>
                {" "}
                {/* CREATE LINK TO SUBJECT */}
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-64 w-100">
                  <img
                    src={subject.imageSrc}
                    alt={subject.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    onClick={() => {
                      console.log("Clicked " + subject.id); // LOG CLICK EVENT
                    }}
                  />
                </div>
                <p className="mt-5 text-center text-lg font-medium text-gray-900">
                  {subject.name} {/* DISPLAY SUBJECT NAME */}
                </p>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectComponent; // EXPORT COMPONENT
