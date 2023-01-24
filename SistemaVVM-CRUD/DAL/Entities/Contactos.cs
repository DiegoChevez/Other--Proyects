using System;

namespace DotVVMcrud.DAL.Entities
{
    public class Contacto
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Email { get; set; }
        public DateTime Nacimiento { get; set; }
        public int Telefono { get; set; }
    }
}
