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
        public int? MonthId { get; set; }
        public int? WeekId { get; set; }
        public string Source { get; set; }
        public string Bucket { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Amount { get; set; }
        public string DateString { 
            get {
                return this.Date.Value.ToString("MM/dd/yy");
            }
        }
        public int Year {
            get {
                return this.Date.Value.Year;
            }
        }
        public int Month {
            get {
                return this.Date.Value.Month;
            }
        }
    }
}
