/*
  Warnings:

  - The values [Stress_management,Medical_checkups,Emotional_wellness,Social_wellness] on the enum `List_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `List` MODIFY `category` ENUM('Nutrition', 'Selfcare', 'Exercise', 'Hobbies', 'Stress_Management', 'Medical_Checkups', 'Hydration', 'Health', 'Emotional_Wellness', 'Social_Wellness') NOT NULL;
