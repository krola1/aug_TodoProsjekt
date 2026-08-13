export const todoTemplate = (title = "test") => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  title: title,
  completed: false,
});
