import React from "react";
import Title from "../components/Title";

const Teachers = () => {
  return (
    <div>
      <Title text="Teachers" />
      {/* <p className="text-center mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8 justify-center gap-24 mt-24 font-bold text-2xl">
        Teachers
      </p> */}

      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8 flex justify-center gap-24 ">
        <div>
          <div className="avatar">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://media.licdn.com/dms/image/D5603AQHGNKLnYUeyag/profile-displayphoto-shrink_800_800/0/1685988397891?e=2147483647&v=beta&t=w7rmNUyshF00MDZpaObHli5ZdcWrFg8XahR2S8vWTzo" />
            </div>
          </div>
          <p className="mt-5 text-center">Kushan Manahara</p>
        </div>
        <div>
          <div className="avatar">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://media.istockphoto.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=612x612&w=0&k=20&c=2hQ4Sm9Puyf1otnVwcyvnY0fk4af-XxHyGqq9ozPpgE=" />
            </div>
          </div>
          <p className="mt-5 text-center">Kushan Manahara</p>
        </div>
        <div>
          <div className="avatar">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.freepik.com/premium-photo/pretty-teacher-writing-chalkboard-classroom_13339-162353.jpg" />
            </div>
          </div>
          <p className="mt-5 text-center">Kushan Manahara</p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
