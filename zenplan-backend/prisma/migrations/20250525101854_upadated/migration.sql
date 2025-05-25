/*
  Warnings:

  - The values [NUTRITION,SELFCARE,EXERCISE,HOBBIES,STRESS_MANAGEMENT,MEDICAL_CHECKUPS,HYDRATION,HEALTH,EMOTIONAL_WELLNESS,SOCIAL_WELLNESS] on the enum `List_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `List` MODIFY `category` ENUM('Nutrition', 'Selfcare', 'Exercise', 'Hobbies', 'Stress_management', 'Medical_checkups', 'Hydration', 'Health', 'Emotional_wellness', 'Social_wellness') NOT NULL;
