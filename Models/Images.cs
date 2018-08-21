using System;
using System.Collections.Generic;

namespace Lab_7__ASP.NET_Core_.Models
{
    public partial class Images
    {
        public Images()
        {
            UsersImages = new HashSet<UsersImages>();
        }

        public int Id { get; set; }
        public string Path { get; set; }

        public ICollection<UsersImages> UsersImages { get; set; }
    }
}
