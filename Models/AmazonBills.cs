using System;
using System.Collections.Generic;

namespace PersonalFinanceWebapp.Models
{
    public partial class AmazonBills
    {
        public string OrderIdAsinIsbn { get; set; }
        public DateTime? OrderDate { get; set; }
        public string Bucket { get; set; }
        public string Title { get; set; }
        public string Seller { get; set; }
        public string Category { get; set; }
        public decimal? ItemTotal { get; set; }
        public string JsonText { get; set; }
    }
}
