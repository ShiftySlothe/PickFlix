/*
  Warnings:

  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TVShow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MovieToUserGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MovieTouserGroupLikes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TVShowToUserGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TVShowTouserGroupLikes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserGroupRequests" DROP CONSTRAINT "UserGroupRequests_userGroupId_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToUserGroup" DROP CONSTRAINT "_MovieToUserGroup_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToUserGroup" DROP CONSTRAINT "_MovieToUserGroup_B_fkey";

-- DropForeignKey
ALTER TABLE "_MovieTouserGroupLikes" DROP CONSTRAINT "_MovieTouserGroupLikes_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieTouserGroupLikes" DROP CONSTRAINT "_MovieTouserGroupLikes_B_fkey";

-- DropForeignKey
ALTER TABLE "_TVShowToUserGroup" DROP CONSTRAINT "_TVShowToUserGroup_A_fkey";

-- DropForeignKey
ALTER TABLE "_TVShowToUserGroup" DROP CONSTRAINT "_TVShowToUserGroup_B_fkey";

-- DropForeignKey
ALTER TABLE "_TVShowTouserGroupLikes" DROP CONSTRAINT "_TVShowTouserGroupLikes_A_fkey";

-- DropForeignKey
ALTER TABLE "_TVShowTouserGroupLikes" DROP CONSTRAINT "_TVShowTouserGroupLikes_B_fkey";

-- DropForeignKey
ALTER TABLE "userGroupLikes" DROP CONSTRAINT "userGroupLikes_userGroupID_fkey";

-- DropTable
DROP TABLE "Movie";

-- DropTable
DROP TABLE "TVShow";

-- DropTable
DROP TABLE "_MovieToUserGroup";

-- DropTable
DROP TABLE "_MovieTouserGroupLikes";

-- DropTable
DROP TABLE "_TVShowToUserGroup";

-- DropTable
DROP TABLE "_TVShowTouserGroupLikes";

-- CreateTable
CREATE TABLE "Show" (
    "id" SERIAL NOT NULL,
    "original_title" TEXT,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ShowToUserGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ShowTouserGroupLikes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserFriends" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ShowToUserGroup_AB_unique" ON "_ShowToUserGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_ShowToUserGroup_B_index" ON "_ShowToUserGroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ShowTouserGroupLikes_AB_unique" ON "_ShowTouserGroupLikes"("A", "B");

-- CreateIndex
CREATE INDEX "_ShowTouserGroupLikes_B_index" ON "_ShowTouserGroupLikes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFriends_AB_unique" ON "_UserFriends"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFriends_B_index" ON "_UserFriends"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userGroupLikes" ADD CONSTRAINT "userGroupLikes_userGroupID_fkey" FOREIGN KEY ("userGroupID") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupRequests" ADD CONSTRAINT "UserGroupRequests_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowToUserGroup" ADD FOREIGN KEY ("A") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowToUserGroup" ADD FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowTouserGroupLikes" ADD FOREIGN KEY ("A") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowTouserGroupLikes" ADD FOREIGN KEY ("B") REFERENCES "userGroupLikes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFriends" ADD FOREIGN KEY ("A") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFriends" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
