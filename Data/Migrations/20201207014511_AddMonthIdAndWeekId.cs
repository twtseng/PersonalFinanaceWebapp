using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PersonalFinanceWebapp.Data.Migrations
{
    public partial class AddMonthIdAndWeekId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Checking",
                columns: table => new
                {
                    Date = table.Column<DateTime>(nullable: false),
                    RunningBal = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Bucket = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    JsonText = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Checking", x => new { x.Date, x.RunningBal, x.Amount });
                });

            migrationBuilder.CreateTable(
                name: "Credit",
                columns: table => new
                {
                    ReferenceNumber = table.Column<string>(nullable: false),
                    Payee = table.Column<string>(nullable: false),
                    PostedDate = table.Column<DateTime>(nullable: true),
                    Bucket = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    JsonText = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Credit", x => new { x.ReferenceNumber, x.Payee });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Checking");

            migrationBuilder.DropTable(
                name: "Credit");
        }
    }
}
