using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;
using DotVVM.Framework.Hosting;
using DotVVMcrud.Models;
using DotVVMcrud.Services;

namespace DotVVMcrud.ViewModels
{
    public class DefaultViewModel : MasterPageViewModel
    {
        private readonly ContactoService contactoService;

		public DefaultViewModel(ContactoService contactoService)
        {
            this.contactoService = contactoService;
        }

        [Bind(Direction.ServerToClient)]
        public List<ContactoListModel> Contactos { get; set; }

        public override async Task PreRender() //Comunicacion de Default hacia la base de datos
        {
            Contactos =  await contactoService.GetAllContactosAsync();
            await base.PreRender();
        }
    }
}
