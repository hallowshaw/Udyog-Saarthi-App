import Accessibility from "../accessibility/Accessibility";
import Searchbar from "../searchbar/Searchbar";
import Notification from "../notificaation/Notification";
import Profile from "../profile/Profile";

export default function TopBar() {
  return (
    <div className="w-full py-5 px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-3 sm:mb-0">
        <Accessibility />
        <Searchbar />
      </div>
      <div className="flex gap-5">
        <Notification />
        <Profile />
      </div>
    </div>
  );
}
