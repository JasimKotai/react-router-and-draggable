import { Link, NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {profiles.map((profile) => {
          return (
            <NavLink
              key={profile}
              to={`/profiles/${profile}`}
              className={({ isActive }) => {
                return isActive ? "text-orange-500" : "";
              }}
            >
              Profile {profile}
            </NavLink>
          );
        })}
      </div>

      <Outlet />
    </div>
  );
}
