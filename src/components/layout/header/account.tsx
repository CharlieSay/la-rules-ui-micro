import axios from "axios";
import { useMemo, useState } from "react";

interface User {
  first: string;
  last: string;
  thumbnail: string;
}

const Account = () => {
  const [user, setUser] = useState<User>();

  useMemo(() => {
    !user &&
      axios.get("https://randomuser.me/api").then((response) => {
        setUser({
          first: response.data.results[0].name.first,
          last: response.data.results[0].name.last,
          thumbnail: response.data.results[0].picture.thumbnail,
        });
      });
  }, [user]);

  return (
    <>
      <div className="account">
        {user && (
          <>
            <p>
              {user.first} {user.last}
            </p>
            <img alt={``} src={user.thumbnail} />
          </>
        )}
      </div>
    </>
  );
};

export default Account;
