using System;
using System.Collections.Generic;

namespace Lab_7__ASP.NET_Core_.Models
{
    public partial class UserInformation
    {
        public int Id { get; set; }
        public string IdUser { get; set; }
        public string Surname { get; set; }
        public string Pseudonym { get; set; }
        public string FieldOfActivity { get; set; }
        public string City { get; set; }

        public AspNetUsers IdUserNavigation { get; set; }
    }
}
