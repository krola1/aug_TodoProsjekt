import { SORT } from "../constants/sort";

export const sortTodos = (list, sort) => {
  const copyList = [...list];
  //----- created at
  if (sort === SORT.OLDEST)
    return copyList.sort((a, b) => a.createdAt - b.createdAt);

  // ----------title----------------

  if (sort === SORT.TITLE_ASC)
    return copyList.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === SORT.TITLE_DEC)
    return copyList.sort((a, b) => a.title.localeCompare(b.title) * -1);
  //----- created at- default
  return copyList.sort((a, b) => (a.createdAt - b.createdAt) * -1);
};
