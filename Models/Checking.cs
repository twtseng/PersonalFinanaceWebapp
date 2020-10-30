using System;
using System.Collections.Generic;

namespace PersonalFinanceWebapp.Models
{
    public partial class Checking
    {
        public DateTime Date { get; set; }
        public string Bucket { get; set; }
        public string Description { get; set; }
        public decimal RunningBal { get; set; }
        public decimal Amount { get; set; }
        public string JsonText { get; set; }
    }
}
