using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchulerPrototype.Controllers
{
    public class HrController : Controller
    {
        public ActionResult hrManagement()
        {
            return View ();
        }
        public ActionResult addEmployee()
        {
            return View();
        }
        public ActionResult empList()
        {
            return View();
        }
        public ActionResult hrResigned()
        {
            return View();
        }
        public ActionResult addEmployeeType()
        {
            return View();
        }
        public ActionResult hrEmployeeLeave()
        {
            return View();
        }
        public ActionResult hrDeducType()
        {
            return View();
        }


       
        public ActionResult hrPayroll()
        {
            return View();
        }
        
        public ActionResult hrAttendance()
        {
            return View();
        }
       
    }
}
