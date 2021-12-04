-- CreateTable
CREATE TABLE "list" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "list_name_key" ON "list"("name");
