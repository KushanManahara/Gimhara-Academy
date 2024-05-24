import { Link, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-2">
      {profiles.map((profileId) => (
        <Link key={profileId} to={`/profiles/${profileId}`}>
          profile id {profileId}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
