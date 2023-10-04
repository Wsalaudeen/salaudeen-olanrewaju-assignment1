const useDate = () => {
  const date = new Date();

  const getDay = () => {
    return date.getDay() + 1;
  };

  const getMonth = () => {
    return date.getMonth() + 1;
  };

  const addDay = (numberOfDays) => {
    //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
   return new Date(date.setDate(numberOfDays)) 
  };

  const addMonth = (numberOfMonths) => {
    //N.B if month after adding is greater than 11, date returned should be a new year
   return  new Date(date.setMonth(numberOfMonths)) 
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default useDate
