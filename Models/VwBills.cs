using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonalFinanceWebapp.Models
{
    public partial class VwBills
    {
        public DateTime? Date { get; set; }
        public int? WeekNum { get; set; }
        public string Source { get; set; }
        public string Bucket { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Amount { get; set; }
    }
}
