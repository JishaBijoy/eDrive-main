using eDrive.DAL.Entities;
using eDrive.DAL.Settings;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace eDrive.DAL.Repository
{
    public class StudentRepo : IStudentRepo
    {
        public async Task<Student> GetStudent(int StudentId)
        {
            Student _stddetails = new Student();
            DataSet ds = new DataSet();
            try
            {
                return await Task.Run(() =>
                {
                    using (SqlDatabaseUtility _dbutility = new SqlDatabaseUtility())
                    {
                        using (SqlCommand cmd = new SqlCommand("[Student].[GetDetailsById]"))
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add("@StudentID", SqlDbType.Int).Value = StudentId;
                            ds = _dbutility.ExecuteQuerySDA(cmd);
                        }
                    }

                    if (ds != null && ds.Tables.Count > 0)
                    {
                        DataTable dt = ds.Tables[0];
                        if (dt.Rows.Count > 0)
                        {
                            _stddetails.StudentID = Convert.ToInt32(dt.Rows[0]["StudentID"]);
                            _stddetails.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                            _stddetails.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
                            _stddetails.FullName = Convert.ToString(dt.Rows[0]["FullName"]);
                            _stddetails.FullNameArabic = Convert.ToString(dt.Rows[0]["FullNameArabic"]);
                            _stddetails.Gender = Convert.ToString(dt.Rows[0]["Gender"]);
                            _stddetails.DateOfBirth = Convert.ToString(dt.Rows[0]["DateOfBirth"]);
                            _stddetails.RegistrationNo = Convert.ToString(dt.Rows[0]["RegistrationNo"]);
                            _stddetails.RegistrationDate = Convert.ToString(dt.Rows[0]["RegistrationDate"]);
                            _stddetails.NationalityID = Convert.ToInt32(dt.Rows[0]["NationalityID"]);
                            _stddetails.IDNumber = Convert.ToString(dt.Rows[0]["VisaOrUIDNumber"]);
                            _stddetails.Address = Convert.ToString(dt.Rows[0]["Address"]);
                            _stddetails.PhoneNo = Convert.ToString(dt.Rows[0]["PhoneNo"]);
                            _stddetails.SourceMediaID = Convert.ToInt32(dt.Rows[0]["SourceMediaID"]);
                            _stddetails.Email = Convert.ToString(dt.Rows[0]["Email"]);
                            _stddetails.HaveOtherNationalLicense = Convert.ToBoolean(dt.Rows[0]["HaveOtherNationalLicense"]);
                            _stddetails.SponsorTypeID = Convert.ToInt32(dt.Rows[0]["SponsorTypeID"]);
                            _stddetails.SponsorID = Convert.ToInt32(dt.Rows[0]["SponsorID"]);
                            _stddetails.Remarks = Convert.ToString(dt.Rows[0]["Remarks"]);
                            _stddetails.BloodType = Convert.ToString(dt.Rows[0]["BloodType"]);
                            _stddetails.StatusID = Convert.ToInt32(dt.Rows[0]["StatusID"]);
                            _stddetails.LocationID = Convert.ToInt32(dt.Rows[0]["LocationID"]);
                            _stddetails.PendingTestID = Convert.ToInt32(dt.Rows[0]["PendingTestID"]);
                            _stddetails.LearningLicenseNo = Convert.ToString(dt.Rows[0]["LearningLicenseNo"]);
                            _stddetails.LearningLicenseIssueDate = Convert.ToString(dt.Rows[0]["LearningLicenseIssueDate"]);
                            _stddetails.LearningLicenseExpiryDate = Convert.ToString(dt.Rows[0]["LearningLicenseExpiryDate"]);
                            _stddetails.QIDExpiry = Convert.ToString(dt.Rows[0]["QIDExpiry"]);
                            _stddetails.Photo = Convert.ToString(dt.Rows[0]["Photo"]);
                            _stddetails.IDFront = Convert.ToString(dt.Rows[0]["IDFront"]); //dt.Rows[0]["IDFront"] != DBNull.Value ? CommonMethods.Getbase64(dt.Rows[0]["IDFront"]) : "";
                            _stddetails.IDBack = Convert.ToString(dt.Rows[0]["IDBack"]);
                            _stddetails.UserID = Convert.ToInt32(dt.Rows[0]["UserID"]);
                        }

                    }
                    return _stddetails;

                });
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", "StudentRepo/GetStudent", ex.Message);
                return _stddetails;
            }

        }

        public async Task<List<Common>> GetStudentCommon()
        {
            List<Common> _commonList = new List<Common>();
            DataSet ds = new DataSet();
            try
            {
                return await Task.Run(() =>
                {
                    using (SqlDatabaseUtility _dbutility = new SqlDatabaseUtility())
                    {
                        using (SqlCommand cmd = new SqlCommand("[Student].[GetStudentCommon]"))
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            ds = _dbutility.ExecuteQuerySDA(cmd);
                        }
                    }

                    if (ds != null && ds.Tables.Count > 0)
                    {
                        DataTable dt = ds.Tables[0];
                        if (dt.Rows.Count > 0)
                        {
                            _commonList = dt.AsEnumerable().Select(x => new Common
                            {
                                RefId = Convert.ToInt32(x["RefId"]),
                                ID = Convert.ToInt32(x["ID"]),
                                Description = Convert.ToString(x["Description"]),
                                TypeId = Convert.ToInt32(x["TypeId"])
                            }).ToList();
                        }
                    }
                    return _commonList;

                });
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", "StudentRepo/GetStudentCommon", ex.Message);
                return _commonList;
            }
        }

        public async Task<List<StudentList>> GetStudentList()
        {
            List<StudentList> _stdList = new List<StudentList>();
            DataSet ds = new DataSet();
            try
            {
                return await Task.Run(() =>
                {
                    using (SqlDatabaseUtility _dbutility = new SqlDatabaseUtility())
                    {
                        using (SqlCommand cmd = new SqlCommand("[Student].[GetList]"))
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            ds = _dbutility.ExecuteQuerySDA(cmd);
                        }
                    }

                    if (ds != null && ds.Tables.Count > 0)
                    {
                        DataTable dt = ds.Tables[0];
                        if (dt.Rows.Count > 0)
                        {
                            _stdList = dt.AsEnumerable().Select(x => new StudentList
                            {
                                StudentID = Convert.ToInt32(x["StudentID"]),
                                FullName = Convert.ToString(x["FullName"]),
                                RegistrationNo = Convert.ToString(x["RegistrationNo"]),
                                IDNumber = Convert.ToString(x["VisaOrUIDNumber"]),
                                PhoneNo = Convert.ToString(x["PhoneNo"]),
                            }).ToList();
                        }
                    }
                    return _stdList;

                });
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", "StudentRepo/GetStudentCommon", ex.Message);
                return _stdList;
            }
        }

        public async Task<SaveStaus> StudentTransaction(Student objStd)
        {
            SaveStaus _objSts = new SaveStaus();
            DataSet ds = new DataSet();
            try
            {
                return await Task.Run(() =>
                {
                    using (SqlDatabaseUtility _dbutility = new SqlDatabaseUtility())
                    {
                        using (SqlCommand cmd = new SqlCommand("[Student].[Registrations]"))
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add("@StudentID", SqlDbType.Int).Value = objStd.StudentID;
                            cmd.Parameters.Add("@FirstName", SqlDbType.VarChar).Value = objStd.FirstName;
                            cmd.Parameters.Add("@MiddleName", SqlDbType.VarChar).Value = objStd.MiddleName;
                            cmd.Parameters.Add("@LastName", SqlDbType.VarChar).Value = objStd.LastName;
                            cmd.Parameters.Add("@FullNameArabic", SqlDbType.VarChar).Value = objStd.FullNameArabic;
                            cmd.Parameters.Add("@Gender", SqlDbType.VarChar).Value = objStd.Gender;
                            cmd.Parameters.Add("@DateOfBirth", SqlDbType.Date).Value = objStd.DateOfBirth;
                            cmd.Parameters.Add("@RegistrationNo", SqlDbType.VarChar).Value = objStd.RegistrationNo;
                            cmd.Parameters.Add("@NationalityID", SqlDbType.Int).Value = objStd.NationalityID;
                            cmd.Parameters.Add("@VisaOrUIDNumber", SqlDbType.VarChar).Value = objStd.IDNumber;
                            cmd.Parameters.Add("@Address", SqlDbType.VarChar).Value = objStd.Address;
                            cmd.Parameters.Add("@PhoneNo", SqlDbType.VarChar).Value = objStd.PhoneNo;
                            cmd.Parameters.Add("@SourceMediaID", SqlDbType.Int).Value = objStd.SourceMediaID == 0 ? null : objStd.SourceMediaID;
                            cmd.Parameters.Add("@Email", SqlDbType.VarChar).Value = objStd.Email;
                            cmd.Parameters.Add("@HaveOtherNationalLicense", SqlDbType.Bit).Value = objStd.HaveOtherNationalLicense;
                            cmd.Parameters.Add("@SponsorTypeID", SqlDbType.Int).Value = objStd.SponsorTypeID;
                            cmd.Parameters.Add("@SponsorID", SqlDbType.Int).Value = objStd.SponsorID ==0 ? null : objStd.SponsorID;
                            cmd.Parameters.Add("@Remarks", SqlDbType.VarChar).Value = objStd.Remarks;
                            cmd.Parameters.Add("@BloodType", SqlDbType.VarChar).Value = objStd.BloodType;
                            cmd.Parameters.Add("@StatusID", SqlDbType.Int).Value = objStd.StatusID;
                            cmd.Parameters.Add("@LocationID", SqlDbType.Int).Value = objStd.LocationID;
                            cmd.Parameters.Add("@PendingTestID", SqlDbType.Int).Value = objStd.PendingTestID;
                            cmd.Parameters.Add("@LearningLicenseNo", SqlDbType.VarChar).Value = objStd.LearningLicenseNo;
                            cmd.Parameters.Add("@LearningLicenseIssueDate", SqlDbType.Date).Value = objStd.LearningLicenseIssueDate;
                            cmd.Parameters.Add("@LearningLicenseExpiryDate", SqlDbType.Date).Value = objStd.LearningLicenseExpiryDate;
                            cmd.Parameters.Add("@QIDExpiry", SqlDbType.VarChar).Value = objStd.StudentID;
                            cmd.Parameters.Add("@UserID", SqlDbType.VarChar).Value = objStd.StudentID;

                            ds = _dbutility.ExecuteQuerySDA(cmd);
                        }
                    }

                    if (ds != null && ds.Tables.Count > 0)
                    {
                        _objSts.StatusId = Convert.ToInt32(ds.Tables[0].Rows[0]["StatusId"]);
                        _objSts.RefId = Convert.ToInt32(ds.Tables[0].Rows[0]["RefId"]);
                        _objSts.Message = Convert.ToString(ds.Tables[0].Rows[0]["Message"]);
                    }
                    return _objSts;

                });
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", "StudentRepo/GetStudentCommon", ex.Message);
                return _objSts;
            }
        }
    }
}
