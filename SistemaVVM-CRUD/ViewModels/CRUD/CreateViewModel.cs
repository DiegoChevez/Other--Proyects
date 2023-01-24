using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;
using DotVVM.Framework.Runtime.Filters;
using DotVVMcrud.Models;
using DotVVMcrud.Services;

namespace DotVVMcrud.ViewModels.CRUD
{
    public class CreateViewModel : MasterPageViewModel
    {
        private readonly ContactoService contactoService;

        public ContactoDetailModel Contacto { get; set; } = new ContactoDetailModel { Nacimiento = DateTime.UtcNow.Date };

        public CreateViewModel(ContactoService contactoService)
        {
            this.contactoService = contactoService;
        }


        public async Task AddContacto()
        {
            await contactoService.InsertContactoAsync(Contacto);
            Context.RedirectToRoute("Default");
        }
    }
}
