/*
  Warnings:

  - Added the required column `user_id` to the `list` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_list" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "list_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_list" ("id", "name") SELECT "id", "name" FROM "list";
DROP TABLE "list";
ALTER TABLE "new_list" RENAME TO "list";
CREATE UNIQUE INDEX "list_name_key" ON "list"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
