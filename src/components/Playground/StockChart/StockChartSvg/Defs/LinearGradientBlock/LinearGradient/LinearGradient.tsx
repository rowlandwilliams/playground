import { bottomChartHeight, margin } from "../../../utils/utils";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
  gradientId: string;
  gradientColor: string;
  chartHeight: number;
  isTopChart?: boolean;
}

export const LinearGradient = ({
  gradientId,
  gradientColor,
  chartHeight,
  isTopChart = false,
}: Props) => {
  const { isDark } = useThemeColor();
  const baseGradientColor = isDark ? "#1A1B3E" : "#f4f4f5";

  return (
    <>
      <linearGradient
        id={gradientId}
        gradientUnits="userSpaceOnUse"
        x1="0%"
        y1={isTopChart ? 0 : 10}
        x2="0%"
        y2={isTopChart ? chartHeight : bottomChartHeight - margin}
      >
        <stop stopColor={gradientColor} offset="0" />
        <stop stopColor={baseGradientColor} offset="1" opacity={0} />
      </linearGradient>
    </>
  );
};
