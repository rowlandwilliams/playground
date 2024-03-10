interface Props {
  width?: number;
}

export const StockChartIcon = ({ width = 16 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={width}
      className="fill-current"
    >
      <path d="M140.001-180.001v-459.996l144.615 108.461 199.23-279.616 189.23 151.153h146.923v479.998H140.001ZM320-280l160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z" />
    </svg>
  );
};
