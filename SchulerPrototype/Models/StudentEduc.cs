using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchulerPrototype.Models
{
    public class StudentEduc
    {
        public int studeduc_ID { get; set; }
        public int stud_ID { get; set; }
        public string school_name { get; set; }
        public string school_lvl { get; set; }
        public string grade_lvl { get; set; }
        public string year_from { get; set; }
        public string year_to { get; set; }
        
    }
}