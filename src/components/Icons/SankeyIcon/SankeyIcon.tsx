interface Props {
  width?: number;
}

export const SankeyIcon = ({ width = 16 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={width}
      className="fill-current"
    >
      <path d="M610.001-130.001v-120h-160v-400H349.999v120H90.001v-299.998h259.998v120h260.002v-120h259.998v299.998H610.001v-120H509.999v340.002h100.002v-120h259.998v299.998H610.001Zm-460.002-640v180.002-180.002Zm520 400v180.002-180.002Zm0-400v180.002-180.002Zm0 180.002h140.002v-180.002H669.999v180.002Zm0 400h140.002v-180.002H669.999v180.002Zm-520-400h140.002v-180.002H149.999v180.002Z" />
    </svg>
  );
};
