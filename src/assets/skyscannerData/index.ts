import type {
  TAirport,
  TSkyScannerCarrier,
  TFlightListing,
  TSkyScannerQuote,
  TSkyScannerPlace,
} from "@/types";

// @todo get this from the places
export const getSupportedAirports = (): TAirport[] => {
  return [
    {
      Id: "CPT",
      Name: "Cape Town",
      CityId: "CPTA",
      CountryId: "ZA",
      Location: "18.602074, -33.971499",
    },
    {
      Id: "EIN",
      Name: "Eindhoven",
      CityId: "EIND",
      CountryId: "NL",
      Location: "5.3783917, 51.45045",
    },
    {
      Id: "AMS",
      Name: "Amsterdam",
      CityId: "AMST",
      CountryId: "NL",
      Location: "4.768056, 52.308333",
    },
    {
      Id: "FAO",
      Name: "Faro",
      CityId: "FARO",
      CountryId: "PT",
      Location: "-7.9697522, 37.017613",
    },
    {
      Id: "LIS",
      Name: "Lisbon",
      CityId: "LISB",
      CountryId: "PT",
      Location: "-9.1353882, 38.775577",
    },
  ];
};

function loadJSON(file: string) {
  return new Promise((resolve, reject) => {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`HTTP error! status: ${response.status}`));
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

const getAirlineName = (carrierId: number, carriers: TSkyScannerCarrier[]) => {
  const airline = carriers.find((carrier) => carrier.CarrierId === carrierId);
  return airline?.Name || "";
};
const getAirportName = (placeId: number, places: TSkyScannerPlace[]) => {
  const place = places.find((place) => place.PlaceId === placeId);
  return place?.Name || "";
};

export const getFlights = (
  date: string,
  departure?: string,
  arrival?: string
): Promise<TFlightListing[]> => {
  return new Promise((resolve, reject) => {
    loadJSON(`/flights-${departure || "CPT"}-${arrival || "AMS"}.json`)
      .then((data: any) => {
        const allFlights = data.Quotes.map((quote: TSkyScannerQuote) => {
          const id = quote.QuoteId.toString();
          const airline = getAirlineName(
            quote.OutboundLeg.CarrierIds[0],
            data.Carriers
          );
          const flightNumber = "";
          const price = `${quote.MinPrice}€`;
          const departureDateTime = quote.OutboundLeg.DepartureDate;
          const arrivalDateTime = "";
          const departureAirport = getAirportName(
            quote.OutboundLeg.OriginId,
            data.Places
          );
          const arrivalAirport = getAirportName(
            quote.OutboundLeg.DestinationId,
            data.Places
          );

          return {
            id,
            airline,
            flightNumber,
            price,
            departureDateTime,
            arrivalDateTime,
            departureAirport,
            arrivalAirport,
          };
        });

        const flights = allFlights.filter((flight: TFlightListing) =>
          flight.departureDateTime.includes(date)
        );

        resolve(flights);
      })
      .catch((error) => {
        console.log(error);
        reject("Something went wrong");
      });
  });
};
