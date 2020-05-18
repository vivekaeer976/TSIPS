using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace TreatyApi.Models
{
    public class Treaty
    {   
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int TreatyID { get; set; }
        public string TreatyName { get; set; }
        public DateTime DateofStart { get; set; }
        public int TeamSize { get; set; }

    }

    public class TreatyItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int TreatyItemsId { get; set; }
        public string Participant { get; set; }
        public string EnglishTitle { get; set; }
        public string Modifier { get; set; }
        public string DataOfModification { get; set; }
        public string WebPublished { get; set; }

    }

    public class TreatyDbContext : DbContext
    {
        public DbSet<Treaty> Treatys { get; set; }
        public DbSet<TreatyItem> TreatyItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("data source=TGN1010\\SQLEXPRESS;integrated security=yes;initial catalog=TreatyDatabase");
        }
    }
}
