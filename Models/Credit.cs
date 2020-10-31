using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace PersonalFinanceWebapp.Models
{
    public partial class Credit
    {
        public string ReferenceNumber { get; set; }
        public DateTime? PostedDate { get; set; }
        public string Bucket { get; set; }
        public string Payee { get; set; }
        public string Address { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Amount { get; set; }
        public string JsonText { get; set; }
    }
}
