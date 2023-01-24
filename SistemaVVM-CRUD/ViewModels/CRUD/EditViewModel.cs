using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.Runtime.Filters;
using DotVVMcrud.Models;
using DotVVMcrud.Services;

namespace DotVVMcrud.ViewModels.CRUD
{
    public class EditViewModel : MasterPageViewModel //Referencia : Herencia
    {
        private readonly ContactoService contactoService;

        public ContactoDetailModel Contacto { get; set; }

        public EditViewModel(ContactoService contactoService)
        {
            this.contactoService = contactoService;
        }


        public override async Task PreRender()
        {
			int id = 0;
            if (int.TryParse(Context.Parameters["Id"].ToString(), out id))
            {
                Contacto = await contactoService.GetContactoByIdAsync(id);
            }
            await base.PreRender();
        }


        public async Task EditContacto()
        {
            await contactoService.UpdateContactoAsync(Contacto);
            Context.RedirectToRoute("CRUD_Detail", new {id = Contacto.Id});
        }
    }
}
