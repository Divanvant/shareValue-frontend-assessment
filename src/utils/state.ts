import type { TFlightListing, TPassengerDetails } from "@/types";

export const setPassengerDetails = (passengerDetails: TPassengerDetails) => {
  const data = JSON.stringify(passengerDetails);
  sessionStorage.setItem("passengerDetails", data);
};
export const getPassengerDetails = () => {
  const data = sessionStorage.getItem("passengerDetails") || "{}";
  return JSON.parse(data);
};
export const clearPassengerDetails = () => {
  sessionStorage.removeItem("passengerDetails");
};

export const setFlightDetails = (flightDetails: TFlightListing) => {
  const data = JSON.stringify(flightDetails);
  sessionStorage.setItem("flightDetails", data);
};
export const getFlightDetails = () => {
  const data = sessionStorage.getItem("flightDetails") || "{}";
  return JSON.parse(data);
};
export const clearFlightDetails = () => {
  sessionStorage.removeItem("flightDetails");
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};
