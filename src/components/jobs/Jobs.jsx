import Job from "../cards/Job";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DB from "../../appwrite/services/db";
import { nanoid } from "nanoid";

export default function Jobs() {
  const [myData, setMyData] = useState([]);
  const slector = useSelector((state) => state.auth.status);
  //retrive user details
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (slector) {
      DB.getAllJob().then((data) => {
        if (data.documents) {
          setMyData(data.documents);
        }
      });
    }

    if (slector) {
      DB.getUser(JSON.parse(localStorage.user).phone.slice(3)).then((data) => {
        if (data) {
          setUserData(data);
        }
      });
    }
  }, [slector]);

  // console.log(myData);

  return (
    <>
      <div className="shadow-sm rounded-xl border-2 border-slate-200 ">
      <div className="rounded-xl p-5 flex flex-col gap-5">
        <h1 className="text-xl font-bold text-slate-700">Available Jobs</h1>
        <div className="flex flex-col gap-6 sm:flex-row sm:overflow-x-auto">
            {myData.map((item) => {
              let myid = nanoid();
              if (userData.disability === item.disability) {
                // console.log(item.$id);
                return <Job key={myid} data={item} isreco={true} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
