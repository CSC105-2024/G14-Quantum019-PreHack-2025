export const useGetUserStats = (lists) => {
  const totalActivities = lists.length;
  const completedActivities = lists.filter((a) => a.is_complete).length;

  const categories = [
    "Nutrition",
    "Selfcare",
    "Medical Checkups",
    "Exercise",
    "Hobbies",
    "Stress Management",
    "Hydration",
    "Health",
    "Emotional Wellness",
    "Social Wellness",
  ];

  const categoriesStats = categories.map((category) => {
    const categoryActivities = lists.filter(
      (a) => a.category.replace(/_/g, " ") === category
    );
    return {
      category,
      completed: categoryActivities.filter((a) => a.is_complete).length,
      total: categoryActivities.length,
    };
  });

  return {
    totalActivities,
    completedActivities,
    categoriesStats,
  };
};
