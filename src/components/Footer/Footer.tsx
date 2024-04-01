import { BioTextLinks } from "../BioText/BioTextLinks/BioTextLinks";

export const Footer = () => {
  const date = new Date();

  return (
    <section className="flex flex-col xs:flex-row gap-2 border-t pt-2 text-zinc-400 dark:border-zinc-700 justify-between xs:items-center">
      <div>© {date.getFullYear()} Rowland Williams. All Rights Reserved.</div>
      <BioTextLinks />
    </section>
  );
};
