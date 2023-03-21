const getSummaryList = (data) => {
  return {
    labels: data.spark.timestamp.slice(1, 7),
    datasets: {
      label: "Sales",
      data: data.spark.close.slice(1, 7).map((_, index) => {
        return index;
      }),
    },
  };
};

export { getSummaryList };
