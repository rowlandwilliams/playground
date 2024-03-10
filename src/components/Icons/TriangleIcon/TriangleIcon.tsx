interface Props {
  width?: number;
}

export const TriangleIcon = ({ width = 16 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="M116.156-180.001 480-762.305l363.844 582.304H116.156ZM224-240h512L480-650 224-240Zm256-205Z" />
    </svg>
  );
};
