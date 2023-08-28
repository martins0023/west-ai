import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubcription } from "@/lib/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubcription();

  return (
    <div className="flex items-center p-4">
        <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
  )
}

export default Navbar