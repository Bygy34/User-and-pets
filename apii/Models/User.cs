using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace apii.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int CountPet { get; set; }
        //public int OwnerId { get; set; }
        //public Owner Owners { get; set; }

        public virtual ICollection<Owner> Owners { get; set; }
    }
}