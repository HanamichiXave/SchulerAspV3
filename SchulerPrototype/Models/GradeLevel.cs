using System;
namespace SchulerPrototype.Models
{
    public class GradeLevel
    {
        public int gradelvl_id{ get; set; }
        public string gradelvl_name { get; set; }
        public decimal tuition { get; set; }
        public decimal lab { get; set; }
        public decimal misc { get; set; }
    }
}
