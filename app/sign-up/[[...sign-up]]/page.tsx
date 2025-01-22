import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <SignUp />
    </div>
  );
};

export default Page;
