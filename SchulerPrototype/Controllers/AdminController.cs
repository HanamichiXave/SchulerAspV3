using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchulerPrototype.Controllers
{
    public class AdminController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Admission()
        {
            return View();
        }
        public ActionResult Enrollment()
        {
            return View();
        }
    }
}
