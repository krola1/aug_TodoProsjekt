export const FILTER = {
  ALL: "all",
  COMPLETED: "completed",
  ACTIVE: "active",
};

export const FILTERS = [
  { value: FILTER.ALL, label: "Show all" },
  { value: FILTER.COMPLETED, label: "Hide active" },
  { value: FILTER.ACTIVE, label: "Hide completed" },
];
