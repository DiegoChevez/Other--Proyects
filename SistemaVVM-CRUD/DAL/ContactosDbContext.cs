using Microsoft.EntityFrameworkCore;
using DotVVMcrud.DAL.Entities;
namespace DotVVMcrud.DAL
{
    public class ContactoDbContext : DbContext
    {
        public ContactoDbContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Contacto> Contactos { get; set; }
    }
}