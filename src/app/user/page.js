import Link from 'next/link';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
export const Home =async () => {
   const {isAuthenticated} = getKindeServerSession();
  console.log(isAuthenticated)
    if ((await isAuthenticated())) {
      return <div className="text-5xl font-bold text-center">"Welcome to your profile!"</div>;
    }
    
    else{
       redirect("/api/auth/login");
    }
 
};

export default Home;
