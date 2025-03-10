export const getDifferenceInHours = (
  startDate: Date,
  endDate: Date
): number => {
  const msDifference = endDate.valueOf() - startDate.valueOf();
  // Did you notice the Math.ceil?, this means that if you stay at the parking one minute...
  // ...you will be charged for one hour. MUAHAHAHAHAHA (evil laugh)
  const differenceInHours = Math.ceil(msDifference / 1000 / 60 / 60);
  return differenceInHours;
};
