export const hasAtLeastOneElementInArray = (arr1 = [], arr2 = []) => {
  if (!arr1.length && !arr2.length) return true;

  return arr1?.some(element => arr2?.includes(element));
};
