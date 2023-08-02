export function useTemperatureConverter(kelvinTemperature: number) {
    function convert(kelvinTemperature: number): number {
        return kelvinTemperature - 273.15;
    }

    const celsiusTemperature = convert(kelvinTemperature);

    return Number.parseFloat(celsiusTemperature.toFixed(2));
}