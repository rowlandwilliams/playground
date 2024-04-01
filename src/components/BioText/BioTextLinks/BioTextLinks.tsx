import { NavbarPlaygroundLink } from "@/components/Navbar/NavbarPlaygroundLink/NavbarPlaygroundLink";
import { EmailLink } from "@/components/SHARED/EmailLink/EmailLink";
import { GithubLink } from "@/components/SHARED/GithubLink/GithubLink";

export const BioTextLinks = () => {
  return (
    <div className="flex gap-x-4 text-zinc-800 items-center dark:text-zinc-300">
      <GithubLink />
      <EmailLink />
      <NavbarPlaygroundLink />
    </div>
  );
};
