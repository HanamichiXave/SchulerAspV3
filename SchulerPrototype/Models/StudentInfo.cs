using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchulerPrototype.Models
{
    public class StudentInfo
    {
        public int stud_ID { get; set; }
        public string stud_givenname { get; set; }
        public string stud_middlename { get; set; }
        public string stud_lastname { get; set; }
        public string stud_address { get; set; }
        public string stud_email { get; set; }
        public string stud_mobilenum { get; set; }
        public string stud_birthday { get; set; }
        public string stud_place { get; set; }
        public string stud_religion { get; set; }
        public string stud_citizenship { get; set; }
    }
}