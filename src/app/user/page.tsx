type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Pietro" },
        { id: 2, name: "Vittor" },
      ]);
    }, 4000);
  });
}

async function UserList() {
  const userList = await fetchUsers();

  return (
    <div className="mt-20 text-white">
      {userList.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default function UserListPage() {
  return (
    <div>
      <UserList />
    </div>
  );
}
