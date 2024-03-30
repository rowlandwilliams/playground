import { EmailLink } from "@/components/SHARED/EmailLink/EmailLink";
import { GithubLink } from "@/components/SHARED/GithubLink/GithubLink";

export const BioTextLinks = () => {
  return (
    <div className="flex gap-x-4 text-zinc-500 items-center dark:text-zinc-300">
      <GithubLink />
      <EmailLink />
    </div>
  );
};
