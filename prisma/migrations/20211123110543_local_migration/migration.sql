-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "imDbID" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fullTitle" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "imDbRating" TEXT NOT NULL,
    "imDbRatingCount" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TVShow" (
    "id" SERIAL NOT NULL,
    "imDbID" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fullTitle" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "imDbRating" TEXT NOT NULL,
    "imDbRatingCount" TEXT NOT NULL,

    CONSTRAINT "TVShow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "userName" TEXT,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "newUser" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT,
    "userGroupId" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genreId" INTEGER,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userGroupLikes" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "userGroupID" INTEGER NOT NULL,
    "liked" BOOLEAN NOT NULL,

    CONSTRAINT "userGroupLikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "genreID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendRequests" (
    "id" SERIAL NOT NULL,
    "accepted" BOOLEAN,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FriendRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroupRequests" (
    "id" SERIAL NOT NULL,
    "accepted" BOOLEAN,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "userGroupId" INTEGER NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserGroupRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieToUserGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieTouserGroupLikes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TVShowToUserGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TVShowTouserGroupLikes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_groupMembers" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserToUserGroup" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToUserGroup_AB_unique" ON "_MovieToUserGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToUserGroup_B_index" ON "_MovieToUserGroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieTouserGroupLikes_AB_unique" ON "_MovieTouserGroupLikes"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieTouserGroupLikes_B_index" ON "_MovieTouserGroupLikes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TVShowToUserGroup_AB_unique" ON "_TVShowToUserGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_TVShowToUserGroup_B_index" ON "_TVShowToUserGroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TVShowTouserGroupLikes_AB_unique" ON "_TVShowTouserGroupLikes"("A", "B");

-- CreateIndex
CREATE INDEX "_TVShowTouserGroupLikes_B_index" ON "_TVShowTouserGroupLikes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_groupMembers_AB_unique" ON "_groupMembers"("A", "B");

-- CreateIndex
CREATE INDEX "_groupMembers_B_index" ON "_groupMembers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToUser_AB_unique" ON "_GenreToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToUser_B_index" ON "_GenreToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToUserGroup_AB_unique" ON "_UserToUserGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToUserGroup_B_index" ON "_UserToUserGroup"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userGroupLikes" ADD CONSTRAINT "userGroupLikes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userGroupLikes" ADD CONSTRAINT "userGroupLikes_userGroupID_fkey" FOREIGN KEY ("userGroupID") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequests" ADD CONSTRAINT "FriendRequests_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequests" ADD CONSTRAINT "FriendRequests_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupRequests" ADD CONSTRAINT "UserGroupRequests_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupRequests" ADD CONSTRAINT "UserGroupRequests_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupRequests" ADD CONSTRAINT "UserGroupRequests_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToUserGroup" ADD FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToUserGroup" ADD FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieTouserGroupLikes" ADD FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieTouserGroupLikes" ADD FOREIGN KEY ("B") REFERENCES "userGroupLikes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TVShowToUserGroup" ADD FOREIGN KEY ("A") REFERENCES "TVShow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TVShowToUserGroup" ADD FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TVShowTouserGroupLikes" ADD FOREIGN KEY ("A") REFERENCES "TVShow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TVShowTouserGroupLikes" ADD FOREIGN KEY ("B") REFERENCES "userGroupLikes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupMembers" ADD FOREIGN KEY ("A") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupMembers" ADD FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToUser" ADD FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToUser" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUserGroup" ADD FOREIGN KEY ("A") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUserGroup" ADD FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
