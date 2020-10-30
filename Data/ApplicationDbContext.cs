using PersonalFinanceWebapp.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalFinanceWebapp.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Checking>()
                .HasKey(check => new { check.Date, check.RunningBal, check.Amount });
            modelBuilder.Entity<Credit>()
                .HasKey(credit => new { credit.ReferenceNumber, credit.Payee });  
            modelBuilder.Entity<VwBills>()
            .HasNoKey()
            .ToView("vw_Bills", "dbo");
        }

        public virtual DbSet<Checking> Checking { get; set; }
        public virtual DbSet<Credit> Credit { get; set; }
        public virtual DbSet<VwBills> VwBills { get; set; }
    }
}
