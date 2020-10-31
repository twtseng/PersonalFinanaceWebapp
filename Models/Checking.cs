using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace PersonalFinanceWebapp.Models
{
    public partial class Checking
    {
        public DateTime Date { get; set; }
        public string Bucket { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal RunningBal { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }
        public string JsonText { get; set; }
    }
}
