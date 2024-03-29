interface Props {
  boldText: string;
  subText: string;
  boldTextMarginRight?: number;
}

export const HeaderText = ({ boldText, subText }: Props) => {
  return (
    <div className="flex text-sm whitespace-nowrap items-center sm:mr-8">
      <div className="mr-2">{boldText}</div>
      <div className="opacity-40">{subText}</div>
    </div>
  );
};
