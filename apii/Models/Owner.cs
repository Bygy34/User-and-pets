using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace apii.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string PetName { get; set; }
        public int year { get; set; }
        //public virtual IList<User> Users { get; set; }
        public int UserId { get; set; }
        //public User Users { get; set; }

    }
}