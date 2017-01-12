using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace apii.Models
{
    public class UserDbInitializer : DropCreateDatabaseAlways<UserContext>
    {
        protected override void Seed(UserContext db)
        {
            //User u1 = new User { Id = 1, UserName = "Bob", CountPet = 2};
            //User u2 = new User { Id = 2, UserName = "Bob2", CountPet = 2 };
            //Owner o1 = new Owner { Id = 1, PetName = "PetName1", year = 2, Users=u1};
            //Owner o2 = new Owner { Id = 2, PetName = "PetName2", year = 2,Users=u1 };



            db.Users.Add(new User { Id = 1, UserName = "Hitch", CountPet = 3 });
            db.Users.Add(new User { Id = 2, UserName = "Mark", CountPet = 4 });
            db.Users.Add(new User { Id = 3, UserName = "Jon", CountPet = 4 });
            db.Users.Add(new User { Id = 4, UserName = "Bin", CountPet = 4 });
            db.Users.Add(new User { Id = 5, UserName = "Chak", CountPet = 4 });
            //db.Owners.Add(new Owner { Id = 1, PetName = "PetName1", year = 2 });
            //db.Owners.Add(new Owner { Id = 2, PetName = "PetName2", year = 2 });
            //db.Owners.Add(new Owner { Id = 3, PetName = "PetName3", year = 2 });
            //db.Owners.Add(new Owner { Id = 4, PetName = "PetName4", year = 2 });
            //db.Owners.Add(new Owner { Id = 5, PetName = "PetName5", year = 2 });
            db.Owners.Add(new Owner { Id = 1, PetName = "PetName1", year = 2, UserId = 1 });
            db.Owners.Add(new Owner { Id = 2, PetName = "PetName2", year = 2, UserId = 2 });
            db.Owners.Add(new Owner { Id = 3, PetName = "PetName3", year = 2, UserId = 2 });
            db.Owners.Add(new Owner { Id = 4, PetName = "PetName4", year = 2, UserId = 4 });
            db.Owners.Add(new Owner { Id = 5, PetName = "PetName5", year = 2, UserId = 5 });
            //db.Owners.Add(new Owner { Id = 2, PetName = "PetName1", UserId = 2, User = u1 });
            //db.Owners.Add(new Owner { Id = 3, PetName = "PetName1", UserId = 3});
            //db.Owners.AddRange(o1,o2);
            //db.Users.Add(u1);
            db.SaveChanges();
            base.Seed(db);
        }
    }
}