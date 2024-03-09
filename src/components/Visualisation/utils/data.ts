import { nMinPerDay, nHoursPerDay, nMinPerHour, nCellsPerColumn, nCellsPerRow } from './numbers';

const generatePhoneTouches = (nPoints: number) => {
    const final: number[] = [];

    for (let i = 0; i < nPoints; i += 1) {
        const hourOfDay = Math.floor((i / nMinPerHour) % nHoursPerDay);

        // Adjust activity levels based on the time of day
        let activityLevel = 0.5; // Default activity level

        if ((hourOfDay >= 6 && hourOfDay < 10) || (hourOfDay >= 17 && hourOfDay < 20)) {
            activityLevel = 1.5; // Morning and evening peaks
        } else if (hourOfDay >= 12 && hourOfDay < 14) {
            activityLevel = 2.0; // Lunchtime peak
        }

        // Generate random touches based on activity level
        const prevValue = final[i - 1] || 0;
        const randomFactor = Math.random() * activityLevel;
        const current = prevValue + randomFactor;

        final.push(current);
    }

    const addNoise = (x: number) => {
        return Math.random() < 0.35 ? x * Math.random() * 1.5 : x + Math.random();
    };

    return final.map((x) => (Math.random() < 0.85 ? x : addNoise(x))).map((num) => Math.abs(num));
};

export const plotData = generatePhoneTouches(nMinPerDay);

const getBarData = () => {
    const hourData = [...Array(nHoursPerDay)].map((num, i) =>
        plotData.slice(i * nMinPerHour, i * nMinPerHour + nMinPerHour),
    );

    const hourDataSplit = hourData.map((hourArray) =>
        [...Array(nCellsPerRow)].map((suh, j) =>
            hourArray
                .slice(j * nCellsPerColumn, j * nCellsPerColumn + nCellsPerColumn)
                .reduce((a, b) => a + b, 0),
        ),
    );

    return hourDataSplit;
};

export const barData = getBarData();
