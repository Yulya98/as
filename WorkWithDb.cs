using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lab_7__ASP.NET_Core_.Models;

namespace Lab_7__ASP.NET_Core_
{
    public class WorkWithDb
    {
        public static string SearchUserIdOnToken(string token)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            string id = (from u in context.AspNetUserTokens
                     where u.Value == token
                     select u.UserId).FirstOrDefault().ToAsyncEnumerable();
            return id;
        }

        public static async UserInformation getInformationActiveUser(string token)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();

            SearchUserIdOnToken(token);
            
            Users aktiveUser = (from u in context.Users
                                where u.Id == Users.ActiveUser
                                select u).Fi;
            return aktiveUser;
        }

        public static List<string> PathPhoto(int id, int idAlbum)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            int?[] idPosts = (from posts in context.UserAlbumPosts
                              where posts.IdUsersAlbum == idAlbum
                              select posts.IdPost).ToArray();
            string[] photoPath = (from page in context.Images
                                  join user in context.UsersImages on page.Id equals user.IdImage
                                  where user.IdUser == id && idPosts.Contains(user.Id)
                                  select page.Path).ToArray();
            string[] namePhoto = (from page in context.UsersImages
                                  join user in context.Images on page.IdImage equals user.Id
                                  where page.IdUser == id
                                  select page.Name).ToArray();
            int i = 0;
            List<string> resultList = new List<string>();
            foreach (string str in photoPath)
            {
                resultList.Add(str);
                resultList.Add(namePhoto[i]);
                i++;
            }
            return resultList;
        }

        public static void AddNewPhoto(string nameImg, string path, int idAlbum)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            Images image = new Images();
            image.Path = path;
            context.Images.Add(image);
            context.SaveChanges();
            int idPage = (from u in context.Images
                          where u.Path == path
                          select u.Id).FirstOrDefault();
            int idUser = WorkWithDb.getInformationActiveUser().Id;
            UsersImages users = new UsersImages();
            users.IdUser = idUser;
            users.IdImage = idPage;
            users.Name = nameImg;
            context.UsersImages.Add(users);
            context.SaveChanges();
            int idPost = (from posts in context.UsersImages
                          select posts.Id).ToList().Last();
            UserAlbumPosts userAlbumPosts = new UserAlbumPosts();
            userAlbumPosts.IdUsersAlbum = idAlbum;
            userAlbumPosts.IdPost = idPost;
            context.UserAlbumPosts.Add(userAlbumPosts);
            context.SaveChanges();
        }

        public static List<string> SearchPosts()
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            string[] authors = (from user in context.Users
                                join userPage in context.UsersImages on user.Id equals userPage.IdUser
                                select user.Name).ToArray();
            authors.Reverse();
            string[] paths = (from imageImg in context.Images
                              join imageUsImg in context.UsersImages on imageImg.Id equals imageUsImg.IdImage
                              select imageImg.Path).ToArray();
            int[] idPosts = (from podtsId in context.UsersImages
                             select podtsId.Id).ToArray();
            int[] idUser = (from podtsId in context.UsersImages
                            select podtsId.IdUser).ToArray();
            int?[] idAlbum = (from albums in context.UserAlbumPosts
                              join post in context.UsersImages on albums.IdPost equals post.Id
                              select albums.IdUsersAlbum).ToArray();
            idUser.Reverse();
            idPosts.Reverse();
            paths.Reverse();
            idAlbum.Reverse();
            int index = 0;
            List<string> posts = new List<string>();
            foreach (string author in authors)
            {
                posts.Add(idPosts[index].ToString());
                posts.Add(author);
                posts.Add(paths[index]);
                posts.Add(idUser[index].ToString());
                posts.Add(idAlbum[index].ToString());
                index++;
            }
            return posts;
        }

        public static List<string> SearchComments(int idPost)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            string[] listUsers = (from userName in context.Users
                                  join postId in context.UsersImagesComments on userName.Id equals postId.IdUser
                                  where idPost == postId.IdPost
                                  select userName.Name).ToArray();
            string[] listComments = (from comment in context.UsersImagesComments
                                     where idPost == comment.IdPost
                                     select comment.Comment).ToArray();
            List<string> listCommentsUsers = new List<string>();
            int i = 0;
            foreach (string str in listUsers)
            {
                listCommentsUsers.Add(str);
                listCommentsUsers.Add(listComments[i]);
                i++;
            }
            return listCommentsUsers;
        }


        public static List<string> AuthorNameAndImagePath(int idPost)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            string autorPost = (from author in context.Users
                                join post in context.UsersImages on author.Id equals post.IdUser
                                where post.Id == idPost
                                select author.Name).FirstOrDefault();
            int authorId = (from author in context.Users
                            join post in context.UsersImages on author.Id equals post.IdUser
                            where post.Id == idPost
                            select author.Id).FirstOrDefault();
            string imagePath = (from path in context.Images
                                join post in context.UsersImages on path.Id equals post.IdImage
                                where post.Id == idPost
                                select path.Path).FirstOrDefault();
            List<string> list = new List<string>();
            list.Add(autorPost);
            list.Add(imagePath);
            list.Add(authorId.ToString());
            return list;
        }

        public static void DeletePhoto(string nameOfPhoto, int idAlbum)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            int idUser = WorkWithDb.getInformationActiveUser().Id;
            UsersImages user = (from image in context.UsersImages
                                join albums in context.UserAlbumPosts on image.Id equals albums.IdPost
                                where image.Name == nameOfPhoto && image.IdUser == Users.ActiveUser && albums.IdUsersAlbum == idAlbum
                                select image).FirstOrDefault();
            context.UsersImages.Attach(user);
            context.UsersImages.Remove(user);
            context.SaveChanges();
        }

        public static void AddComment(int idPost, string text)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            int activeUserId = WorkWithDb.getInformationActiveUser().Id;
            UsersImagesComments comment = new UsersImagesComments();
            comment.IdPost = idPost;
            comment.IdUser = activeUserId;
            comment.Comment = text;
            context.UsersImagesComments.Add(comment);
            context.SaveChanges();
        }


        public static int AddAlbum(int idUser, string nameAlbum)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            Album album = new Album();
            album.NameOfAlbum = nameAlbum;
            context.Album.Add(album);
            context.SaveChanges();
            int idAlbum = (from u in context.Album
                           select u.Id).ToList().Last();
            UserAlbum userAlbum = new UserAlbum();
            userAlbum.UserId = idUser;
            userAlbum.AlbumId = idAlbum;
            context.UserAlbum.Add(userAlbum);
            context.SaveChanges();
            return idAlbum;
        }

        public static List<string> SearchAlbum(int idUser)
        {
            TokenDatabaseContext context = new TokenDatabaseContext();
            UserAlbum[] userAlbum = (from u in context.UserAlbum
                                     where u.UserId == idUser
                                     select u).ToArray();
            string[] nameAlbum = (from albumName in context.Album
                                  join userAlbums in context.UserAlbum on albumName.Id equals userAlbums.AlbumId
                                  where userAlbums.UserId == idUser
                                  select albumName.NameOfAlbum).ToArray();
            var index = 0;
            List<string> listIdAlbumAndNameAlbum = new List<string>();
            foreach (UserAlbum album in userAlbum)
            {
                listIdAlbumAndNameAlbum.Add(album.Id.ToString());
                listIdAlbumAndNameAlbum.Add(nameAlbum[index]);
                index++;
            }
            return listIdAlbumAndNameAlbum;
        }
    }
}
}
