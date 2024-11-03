import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSalesforceData, fetchUser } from "../../services/userService";

interface User {
  id: number;
  email: string;
  role: string;
}

export default function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState<null | User>(null);
  const [records, setRecords] = useState<any[]>([]);

  const getUser = async (id: string) => {
    try {
      const res = await fetchUser(id);
      setUser(res.data);
    } catch (err) {
      console.log("Error from get user => ", err);
    }
  };

  const loadSalesforceData = async () => {
    try {
      const res = await fetchSalesforceData();
      setRecords(res.data);
    } catch (err) {
      console.log("Error from load salesforce => ", err);
    }
  };

  useEffect(() => {
    if (userId) getUser(userId);
  }, [userId]);

  return (
    <main className="container mt-4">
      <h1>{`${userId} : ${user?.email}`}</h1>
      <button className="btn btn-secondary my-3" onClick={loadSalesforceData}>
        Load Salseforce Data
      </button>
      <ul className="list-group" style={{ maxWidth: "max-content" }}>
        {records.length > 0 &&
          records.map((record: any) => (
            <li className="list-group-item" key={record.Id}>
              {record.Name}
            </li>
          ))}
      </ul>
    </main>
  );
}
