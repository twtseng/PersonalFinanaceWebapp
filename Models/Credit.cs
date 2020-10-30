using System;
using System.Collections.Generic;

namespace PersonalFinanceWebapp.Models
{
    public partial class Credit
    {
        public string ReferenceNumber { get; set; }
        public DateTime? PostedDate { get; set; }
        public string Bucket { get; set; }
        public string Payee { get; set; }
        public string Address { get; set; }
        public decimal? Amount { get; set; }
        public string JsonText { get; set; }
    }
}
