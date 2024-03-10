interface Props {
  boldText: string;
  subText: string;
  boldTextMarginRight?: number;
}

export const HeaderText = ({ boldText, subText }: Props) => {
  return (
    <div className="flex text-sm items-center sm:mr-8">
      <div className="mr-2">{boldText}</div>
      <div className="opacity-20">{subText}</div>
    </div>
  );
};
