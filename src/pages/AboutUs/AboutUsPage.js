import React from "react";
import UserCard from "../../components/UserCard/UserCard";

const AboutUsPage = () => {
  return (
    <div className="mt-24 mb-20 flex flex-row justify-evenly items-center min-h-[54vh]">
      <UserCard
        name="Denis Mahmutovic"
        place="Novi Pazar, Serbia"
        description="Denis work's in night club and he work's in centar NIT"
        git="https://github.com/denismahmutovic"
        gitimage="https://avatars.githubusercontent.com/u/100436234?v=4"
      />
    </div>
  );
};

export default AboutUsPage;
