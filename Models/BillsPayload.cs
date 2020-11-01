using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonalFinanceWebapp.Models
{
    public partial class BillsPayload
    {
        public List<VwBills> Bills { get; set; }
        public List<int> Years { get; set; }
        public List<int> Months { get; set; }
        public List<int> Weeks { get; set; }
    }
}
