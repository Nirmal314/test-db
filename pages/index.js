import User from "../models/User";
import mongoose from "mongoose";

export default function Home({ users }) {
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        {users.map((user, i) => (
          <p key={i} className="text-2xl">
            {user.name}
          </p>
        ))}
      </div>
    </>
  );
}
// {user.name}
// {user.email}
// {user.gender}
// {user.income}
// {user.age}
// {user.marital}
// {user.cast}
// {user.education}
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const users = await User.find();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
