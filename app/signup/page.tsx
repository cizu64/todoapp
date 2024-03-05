import SignUp from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create an account"
  };

export default function Page() {
  return <SignUp/>
}
