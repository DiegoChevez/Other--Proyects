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
    public class DetailViewModel : MasterPageViewModel
    {
        private readonly ContactoService contactoService;

        public DetailViewModel(ContactoService contactoService)
        {
            this.contactoService = contactoService;
        }

        public ContactoDetailModel Contacto { get; set; }

        public override async Task PreRender()
        {
            int id = Convert.ToInt32(Context.Parameters["Id"]);
            Contacto = await contactoService.GetContactoByIdAsync(id);
            await base.PreRender();
        }
        public async Task DeleteContacto()
        {
            await contactoService.DeleteContactoAsync(Contacto.Id);
            Context.RedirectToRoutePermanent("Default", replaceInHistory: true);
        }
    }
}
