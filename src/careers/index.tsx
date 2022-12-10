import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import { jobsQuery } from "../firebase";
import { Job } from "../types";

export function CareersPage() {
  const [data, loading] = useCollectionDataOnce(jobsQuery);
  const jobs = data as Job[];

  return (
    <div className="flex-grow p-5 text-center">
      {loading && <div>loading available jobs...</div>}
      {jobs &&
        jobs.map((job) => (
          <div className="border p-5 mb-3" key={job.name}>
            <h2 className="font-bold">{job.name}</h2>
            <div>{job.description}</div>
            <Link to={"/careers/details"}>
              <button className="bg-blue-700 text-white rounded m-2 p-2">
                Apply now
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
}
