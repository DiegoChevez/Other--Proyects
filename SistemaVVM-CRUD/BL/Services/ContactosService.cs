using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotVVMcrud.DAL;
using DotVVMcrud.DAL.Entities;
using DotVVMcrud.Models;
using Microsoft.EntityFrameworkCore;

namespace DotVVMcrud.Services
{
    public class ContactoService
    {
        private readonly ContactoDbContext contactoDbContext;

        public ContactoService(ContactoDbContext contactoDbContext)
        {
            this.contactoDbContext = contactoDbContext;
        }

        public async Task<List<ContactoListModel>> GetAllContactosAsync()
        {

            return await contactoDbContext.Contactos.Select(
                s => new ContactoListModel
                {
                    Id = s.Id,
                    Nombres = s.Nombres,
                    Apellidos = s.Apellidos
                }
            ).ToListAsync();
        }


        public async Task<ContactoDetailModel> GetContactoByIdAsync(int contactoId)
        {
            return await contactoDbContext.Contactos.Select(
                    s => new ContactoDetailModel
                    {
                        Id = s.Id,
                        Nombres = s.Nombres,
                        Apellidos = s.Apellidos,
                        Email = s.Email,
                        Nacimiento = s.Nacimiento,
                        Telefono = s.Telefono
                    })
                .FirstOrDefaultAsync(s => s.Id == contactoId);

        }

        public async Task UpdateContactoAsync(ContactoDetailModel contacto)
        {
            var entity = await contactoDbContext.Contactos.FirstOrDefaultAsync(s => s.Id == contacto.Id);

            entity.Nombres = contacto.Nombres;
            entity.Apellidos = contacto.Apellidos;
            entity.Email = contacto.Email;
            entity.Nacimiento = contacto.Nacimiento;
            entity.Telefono = contacto.Telefono;

            await contactoDbContext.SaveChangesAsync();
        }

        public async Task InsertContactoAsync(ContactoDetailModel contacto)
        {
            var entity = new Contacto()
            {
                Nombres = contacto.Nombres,
                Apellidos = contacto.Apellidos,
                Email = contacto.Email,
                Nacimiento = contacto.Nacimiento,
                Telefono = contacto.Telefono
            };

            contactoDbContext.Contactos.Add(entity);
            await contactoDbContext.SaveChangesAsync();
        }

        public async Task DeleteContactoAsync(int contactoId)
        {
            var entity = new Contacto()
            {
                Id = contactoId
            };
            contactoDbContext.Contactos.Attach(entity);
            contactoDbContext.Contactos.Remove(entity);
            await contactoDbContext.SaveChangesAsync();
        }


    }
}
