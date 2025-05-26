const converter = (category: string) => {
  const cate = category.includes(" ") ? category.replace(" ", "_") : category;
  return cate;
};

export { converter };
