-- AlterTable
ALTER TABLE `category` MODIFY `created_by` VARCHAR(191) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL,
    MODIFY `deleted_by` VARCHAR(191) NULL,
    MODIFY `update_by` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `debit` MODIFY `created_by` VARCHAR(191) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL,
    MODIFY `deleted_by` VARCHAR(191) NULL,
    MODIFY `update_by` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `created_by` VARCHAR(191) NULL,
    MODIFY `deleted_at` DATETIME(3) NULL,
    MODIFY `deleted_by` VARCHAR(191) NULL,
    MODIFY `update_by` VARCHAR(191) NULL;
