using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dapper;
using SchulerPrototype.Models;
//using SchulerPrototype.Repository;
using System.Data;


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

        [HttpPost]
        public ActionResult Admission(StudentInfo _studinfo)
        {
            try
            {
                using (IDbConnection db = new System.Data.SqlClient.SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["SchulerTrack"].ConnectionString))
                {
                    var result = db.Query<int>("dbo.SPaddstudentinfo @stud_givenname,@stud_middlename,@stud_lastname, @stud_address,@stud_email,@stud_mobilenum,@stud_birthday,@stud_place,@stud_religion,@stud_citizenship", new StudentInfo { stud_givenname = _studinfo.stud_givenname, stud_middlename = _studinfo.stud_middlename, stud_lastname = _studinfo.stud_lastname,   stud_address = _studinfo.stud_address, stud_email = _studinfo.stud_email, stud_mobilenum = _studinfo.stud_mobilenum, stud_birthday = _studinfo.stud_birthday, stud_place = _studinfo.stud_place, stud_religion = _studinfo.stud_religion, stud_citizenship = _studinfo.stud_citizenship });
                    
                }
              
            }
            catch
            {
                return View();
            }

            return RedirectToAction("EnrollList");
        }

        public ActionResult Enrollment()
        {
            return View();
        }
        public ActionResult EnrollList()
        {
            List<StudentInfo> stud = new List<StudentInfo>();
            using (IDbConnection db = new System.Data.SqlClient.SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["SchulerTrack"].ConnectionString))
            {
               stud = db.Query<StudentInfo>("SPallstudent", CommandType.StoredProcedure).ToList();
            }

            return View(stud);
        }
        public ActionResult GradeLevel()
        {
            List<GradeLevel> grades = new List<GradeLevel>();
            using(IDbConnection db = new System.Data.SqlClient.SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["SchulerTrack"].ConnectionString))
           {
                grades = db.Query<GradeLevel>("SPselectgrade", CommandType.StoredProcedure).ToList();
            }

            return View(grades);

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
            List<StudentInfo> stud = new List<StudentInfo>();
            using (IDbConnection db = new System.Data.SqlClient.SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["SchulerTrack"].ConnectionString))
            {
                stud = db.Query<StudentInfo>("SPallstudent", CommandType.StoredProcedure).ToList();
            }

            return View(stud);
           
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