export const getDate = (dateTime: string) => {
  return dateTime.split("T")[0];
};

export const getTime = (dateTime: string) => {
  return dateTime.split("T")[1];
};
