using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalFinanceWebapp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public enum Role {
            Public=1,
            Admin=2
        }
    }
}
