using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalFinanceWebapp.Data;
using PersonalFinanceWebapp.Models;
using System.Security.Claims;

namespace PersonalFinanceWebapp.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class FinanceDataController : ControllerBase
    {

        private readonly ILogger<FinanceDataController> _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly UserManager<ApplicationUser> _userManager; 

        public FinanceDataController(
            ILogger<FinanceDataController> logger,
            ApplicationDbContext dbContext,
            UserManager<ApplicationUser> userManager)
        {
            _logger = logger;
            _dbContext = dbContext;
            _userManager = userManager;
        }
        public ApplicationUser GetApplicationUser()
        {
            string userId = this.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            ApplicationUser appUser = _dbContext.Users.Find(userId); 
            return appUser;       
        }

        [HttpGet("Bills")]
        public async Task<IEnumerable<VwBills>> GetBills()
        {
            ApplicationUser user = this.GetApplicationUser();
            _logger.LogInformation($"FinanceDataController.GetBills(), user={user.Email}");
            var roles = await _userManager.GetRolesAsync(user);
            var billData = _dbContext.VwBills.ToList();
            if (roles.Contains(ApplicationUser.Role.Admin.ToString()))
            {
                return billData;
            }
            else
            {
                billData.ForEach(x => x.Description = "<Restricted data>");
                return billData;
            }
        }

    }
}
