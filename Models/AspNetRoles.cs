using System;
using System.Collections.Generic;

namespace Lab_7__ASP.NET_Core_.Models
{
    public partial class AspNetRoles
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string NormalizedName { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}
