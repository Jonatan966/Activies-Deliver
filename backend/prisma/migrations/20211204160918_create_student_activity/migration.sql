-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "called" INTEGER NOT NULL,
    "files" TEXT NOT NULL,
    "list_id" TEXT NOT NULL,
    CONSTRAINT "student_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "list" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
