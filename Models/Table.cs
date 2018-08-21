﻿using System;
using System.Collections.Generic;

namespace Lab_7__ASP.NET_Core_.Models
{
    public partial class Table
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int? AlbumId { get; set; }

        public Album Album { get; set; }
        public AspNetUsers User { get; set; }
    }
}
