using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using SchulerPrototype.Models;
using Dapper;
using System.Linq;
namespace SchulerPrototype.Repository
{
    public class GradeLevelRepository
    {
        public SqlConnection con;
        //To Handle connection related activities
        private void connection()
        {
            string constr = ConfigurationManager.ConnectionStrings["SchulerTrack"].ToString();
            con = new SqlConnection(constr);
        }
        //To Add Employee details
        public void AddEmployee(GradeLevel objGradeLevel)
        {
            //Additing the employess
            try
            {
                connection();
                con.Open();
                con.Execute("SPinsertgrade", objGradeLevel, commandType: CommandType.StoredProcedure);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //To view employee details with generic list 
        public List<GradeLevel> GetAllGradeLevel()
        {
            try
            {
                connection();
                con.Open();
                IList<GradeLevel> GradeLevelList = SqlMapper.Query<GradeLevel>(
                                  con, "SPselectgrade").ToList();
                con.Close();
                return GradeLevelList.ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        //To Update Employee details
        //public void UpdateEmployee(GradeLevel objUpdate)
        //{
        //    try
        //    {
        //        connection();
        //        con.Open();
        //        con.Execute("UpdateEmpDetails", objUpdate, commandType: CommandType.StoredProcedure);
        //        con.Close();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        //To delete Employee details
        //public bool DeleteEmployee(int Id)
        //{
        //    try
        //    {
        //        DynamicParameters param = new DynamicParameters();
        //        param.Add("@EmpId", Id);
        //        connection();
        //        con.Open();
        //        con.Execute("DeleteEmpById", param, commandType: CommandType.StoredProcedure);
        //        con.Close();
        //        return true;
        //    }
        //    catch (Exception ex)
        //    {
        //        //Log error as per your need 
        //        throw ex;
        //    }
        //}
    }
}
