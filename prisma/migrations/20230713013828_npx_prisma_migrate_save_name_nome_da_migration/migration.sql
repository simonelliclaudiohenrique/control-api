/*
  Warnings:

  - You are about to drop the column `descricao` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `observacao` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `categoria_id` on the `debit` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `debit` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `debit` table. All the data in the column will be lost.
  - You are about to drop the column `categoria_id` on the `prohibited` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `prohibited` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `prohibited` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_by` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_by` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_by` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_by` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `debit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_by` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_by` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `prohibited` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_by` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_by` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `descricao`,
    DROP COLUMN `observacao`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `created_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `deleted_at` DATETIME(3) NOT NULL,
    ADD COLUMN `deleted_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `descirption` VARCHAR(191) NULL,
    ADD COLUMN `observation` VARCHAR(191) NULL,
    ADD COLUMN `update_at` DATETIME(3) NOT NULL,
    ADD COLUMN `update_by` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `debit` DROP COLUMN `categoria_id`,
    DROP COLUMN `descricao`,
    DROP COLUMN `valor`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `created_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `deleted_at` DATETIME(3) NOT NULL,
    ADD COLUMN `deleted_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `descirption` VARCHAR(191) NULL,
    ADD COLUMN `update_at` DATETIME(3) NOT NULL,
    ADD COLUMN `update_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `value` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `prohibited` DROP COLUMN `categoria_id`,
    DROP COLUMN `descricao`,
    DROP COLUMN `valor`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `created_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `deleted_at` DATETIME(3) NOT NULL,
    ADD COLUMN `deleted_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `descirption` VARCHAR(191) NULL,
    ADD COLUMN `update_at` DATETIME(3) NOT NULL,
    ADD COLUMN `update_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `value` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `created_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `deleted_at` DATETIME(3) NOT NULL,
    ADD COLUMN `deleted_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `update_at` DATETIME(3) NOT NULL,
    ADD COLUMN `update_by` VARCHAR(191) NOT NULL;
