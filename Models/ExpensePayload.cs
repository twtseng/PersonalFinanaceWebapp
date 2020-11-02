using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonalFinanceWebapp.Models
{
    public partial class ExpensePayload
    {
        public DateTime Date { get; set; }
        public int WeekNum { get; set; }
        public string Source { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public string DateString { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }

        public ExpensePayload(VwBills bill)
        {
            this.Amount = bill.Amount.Value;
            this.Category = bill.Bucket;
            this.Date = bill.Date.Value;
            this.DateString = bill.DateString;
            this.Description = bill.Bucket;
            this.Month = bill.Month;
            this.Source = bill.Source;
            this.WeekNum = bill.WeekNum.Value;
            this.Year = bill.Year;
        }
    }
}
