using System;
using System.ComponentModel.DataAnnotations;

namespace DotVVMcrud.Models
{
    public class ContactoDetailModel
    {
        public int Id { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public DateTime Nacimiento { get; set; }
        public string Email { get; set; }
        public int Telefono { get; set; }

    }
}
