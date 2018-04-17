using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dapper;
using SchulerPrototype.Models;
using SchulerPrototype.Repository;

namespace SchulerPrototype.Controllers
{
    public class AdminController : Controller
    {
        public ActionResult Index()
        {
            GradeLevelRepository GLRepo = new GradeLevelRepository();
            return View(GLRepo.GetAllGradeLevel());
        }
        public ActionResult Admission()
        {
            return View();
        }
        public ActionResult Enrollment()
        {
            return View();
        }
        public ActionResult EnrollList()
        {
            return View();
        }
        public ActionResult GradeLevel()
        {
            return View();
        }
        public ActionResult GradeSection()
        {
            return View();
        }
        public ActionResult Sections()
        {
            return View();
        }
        public ActionResult SectionStudents()
        {
            return View();
        }
        public ActionResult StudentList()
        {
            return View();
        }

        public ActionResult Details(int id)
        {
            return View ();
        }

        public ActionResult Create()
        {
            return View ();
        } 

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try {
                return RedirectToAction ("Index");
            } catch {
                return View ();
            }
        }
        
        public ActionResult Edit(int id)
        {
            return View ();
        }

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try {
                return RedirectToAction ("Index");
            } catch {
                return View ();
            }
        }

        public ActionResult Delete(int id)
        {
            return View ();
        }

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try {
                return RedirectToAction ("Index");
            } catch {
                return View ();
            }
        }
    }
}