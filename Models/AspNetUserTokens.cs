using System;
using System.Collections.Generic;

namespace Lab_7__ASP.NET_Core_.Models
{
    public partial class AspNetUserTokens
    {
        public string UserId { get; set; }
        public string Value { get; set; }

        public AspNetUsers User { get; set; }
    }
}
