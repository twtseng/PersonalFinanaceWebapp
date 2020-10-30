using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalFinanceWebapp.Data;
using PersonalFinanceWebapp.Models;

namespace PersonalFinanceWebapp.Controllers
{
    // [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class FinanceDataController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<FinanceDataController> _logger;
        private readonly ApplicationDbContext _dbContext;

        public FinanceDataController(ILogger<FinanceDataController> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }
        [HttpGet("Bills")]
        public IEnumerable<VwBills> GetBills()
        {
            _logger.LogInformation($"FinanceDataController.GetBills()");
            return _dbContext.VwBills
            .Select(x => new VwBills(){ Amount=x.Amount, Bucket=x.Bucket, Date=x.Date, Source=x.Source, WeekNum=x.WeekNum, Description="xxxxxx DATA RESTRICTED xxxxx"});
        }

    }
}
