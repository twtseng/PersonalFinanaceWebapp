using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace PersonalFinanceWebapp.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger, IConfiguration configuration)
        {
            _logger = logger;
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void OnGet()
        {
                _logger.LogInformation($"Authentication:Facebook:AppId: [{Configuration["Authentication:Facebook:AppId"]}]");
                _logger.LogInformation($"Authentication:Facebook:AppSecret: [{Configuration["Authentication:Facebook:AppSecret"]}]");
        }
    }
}
