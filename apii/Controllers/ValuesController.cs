using System.Collections.Generic;
using System.Data.Entity;
using System.Web.Http;
using apii.Models;
using System.Linq;
using System.Web.Http.Description;
using System.Web.Http.Cors;

namespace BookStore.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ValuesController : ApiController
    {
        UserContext db = new UserContext();

        //"http://localhost:54869/api/values/GetUser"
        [Route("api/values/GetUser")]
        [DisableCors]
        public IEnumerable<User> GetUser()
        {
            return db.Users.Include("Owners").ToList();
        }

        [Route("api/values/GetUser/{id}")]
        [DisableCors]
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }


        [HttpPost]
        [DisableCors]
        public void CreateBook([FromBody]User book)
        {
            db.Users.Add(book);
            db.SaveChanges();
        }

        [HttpPut]
        public void EditBook(int id, [FromBody]User book)
        {
            if (id == book.Id)
            {
                db.Entry(book).State = EntityState.Modified;

                db.SaveChanges();
            }
        }

        [Route("api/Book/{id}")]
        [DisableCors]
        public void DeleteBook(int id)
        {
            User book = db.Users.Find(id);
            if (book != null)
            {
                db.Users.Remove(book);
                db.SaveChanges();
            }
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}