using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Lab_7__ASP.NET_Core_.Models;

namespace Lab_7__ASP.NET_Core_.Controllers
{
    public class DatabaseController : Controller
    {
        [Route("aktiveusersearch")]
        public string[] PostAktiveUser([FromBody]Newtonsoft.Json.Linq.JObject token)
        {
            AspNetUsers user = WorkWithDb.getUser(token["token"].ToString());
            return new string[] { user.UserName, user.Surname, user.Email, user.FieldOfActivity, user.City };
        }


        [Route("searchphoto")]
        public string[] SearchPhoto([FromBody]Newtonsoft.Json.Linq.JObject idUser)
        {
            string userId = WorkWithDb.getUserId(idUser["token"].ToString());
            string[] array = WorkWithDb.PathPhoto(userId, Convert.ToInt32(idUser["idAlbum"])).ToArray();
            return array;
        }

        [Route("addPhoto")]
        public void AddPhoto([FromBody]Newtonsoft.Json.Linq.JObject photo)
        {
            string userId = WorkWithDb.getUserId(photo["token"].ToString());
            WorkWithDb.AddNewPhoto(photo["NameImg"].ToString(), photo["Path"].ToString(), Convert.ToInt32(photo["idAlbum"]), userId);
        }

        [Route("searchPosts")]
        public string[] searchImagesPosts()
        {
            string[] posts = WorkWithDb.SearchPosts().ToArray();
            return posts;
        }

        [Route("searchComments")]
        public string[] SearchCommentsToPosts([FromBody]Newtonsoft.Json.Linq.JObject idPost)
        {
            string[] comments = WorkWithDb.SearchComments(Convert.ToInt32(idPost["idPost"])).ToArray();
            return comments;
        }

        [Route("searchAuthor")]
        public string[] AuthorNameAndImagePath([FromBody]Newtonsoft.Json.Linq.JObject idPost)
        {
            string[] authorsPaths = WorkWithDb.AuthorNameAndImagePath(Convert.ToInt32(idPost["idPost"])).ToArray();
            return authorsPaths;
        }

        [Route("photoDelete")]
        public void PhotoDelete([FromBody]Newtonsoft.Json.Linq.JObject photo)
        {
            string userId = WorkWithDb.getUserId(photo["token"].ToString());
            WorkWithDb.DeletePhoto(photo["nameImg"].ToString(), Convert.ToInt32(photo["idAlbum"]), userId);
        }

        [Route("addComment")]
        public void AddComment([FromBody]Newtonsoft.Json.Linq.JObject photo)
        {
            WorkWithDb.AddComment(Convert.ToInt32(photo["idPost"]), photo["text"].ToString());
        }

        //[Route("defineRegistrationUser")]
        //public bool DefineRegistrationUser(Newtonsoft.Json.Linq.JObject photo)
        //{
        //    string userId = HttpContext.Session.Get("userId").ToString();
        //    if (userId != -1)
        //        return true;
        //    else
        //        return false;
        //}


        [Route("addAlbum")]
        public int AddAlbum([FromBody]Newtonsoft.Json.Linq.JObject album)
        {
            string userId = WorkWithDb.getUserId(album["token"].ToString());
            int id = WorkWithDb.AddAlbum(userId, album["nameOfAlbum"].ToString());
            return id;
        }

        [Route("searchAlbum")]
        public string[] SearchAlbum([FromBody]Newtonsoft.Json.Linq.JObject album)
        {
            string userId = WorkWithDb.getUserId(album["token"].ToString());
            string[] albums = WorkWithDb.SearchAlbum(userId.ToString()).ToArray();
            return albums;
        }
    }
}