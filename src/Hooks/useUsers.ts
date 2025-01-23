import { getUsers } from "@/lib/actions/getUsers";
import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState<string[] | null>(null);

  useEffect(() => {
    async function main() {
      const res = await getUsers();
      if (res) {
        setUsers(res[0].user);
      }
    }

    main();
  }, []);
  return { users };
}
