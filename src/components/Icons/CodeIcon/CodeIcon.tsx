interface Props {
  width?: number;
}

export const CodeIcon = ({ width = 16 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="M320-253.847 93.847-480 320-706.153l42.768 42.768-184 184L362.153-296 320-253.847Zm320 0-42.768-42.768 184-184L597.847-664 640-706.153 866.153-480 640-253.847Z" />{" "}
    </svg>
  );
};
