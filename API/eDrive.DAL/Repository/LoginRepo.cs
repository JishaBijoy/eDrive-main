using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using eDrive.DAL.Entities;
using eDrive.DAL.Settings;
using Microsoft.Extensions.Options;

namespace eDrive.DAL.Repository
{
    public class LoginRepo : ILoginRepo
    {

        public async Task<LoginModel> VerifyLogin(string UserName, string UserPwd)
        {
            LoginModel _logindetails = new LoginModel();
            List<UserRoles> _UserRoles = new List<UserRoles>();
            DataSet ds = new DataSet();
            try
            {
                return await Task.Run(() =>
                {
                    using (SqlDatabaseUtility _dbutility = new SqlDatabaseUtility())
                    {
                        using (SqlCommand cmd = new SqlCommand("[App].[UserLogin]"))
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.Add("@UserName", SqlDbType.VarChar).Value = UserName;
                            cmd.Parameters.Add("@Password", SqlDbType.VarChar).Value = UserPwd;

                            ds = _dbutility.ExecuteQuerySDA(cmd);
                        }
                    }

                    if (ds != null && ds.Tables.Count > 0)
                    {
                        DataTable dt = ds.Tables[0];
                        if (dt.Rows.Count > 0)
                        {
                            _logindetails.UserID = Convert.ToInt32(dt.Rows[0]["UserID"]);
                            _logindetails.UserName = Convert.ToString(dt.Rows[0]["UserName"]);
                            _logindetails.RoleId = Convert.ToInt32(dt.Rows[0]["RoleId"]);
                            _logindetails.RoleName = Convert.ToString(dt.Rows[0]["RoleName"]);
                            _logindetails.EmployeeID = Convert.ToInt32(dt.Rows[0]["EmployeeID"]);
                            _logindetails.EmployeeName = Convert.ToString(dt.Rows[0]["EmployeeName"]);
                            _logindetails.TokenKey = Convert.ToString(dt.Rows[0]["TokenKey"]);
                            _logindetails.EmployeeImage = Convert.ToString(dt.Rows[0]["RecentPhoto"]);

                        }
                        DataTable dt1 = ds.Tables[1];
                        if (dt1.Rows.Count > 0)
                        {
                            _UserRoles = dt1.AsEnumerable().Select(x => new UserRoles
                            {
                                IsCreate = Convert.ToBoolean(x["IsCreate"]),
                                IsView = Convert.ToBoolean(x["IsView"]),
                                IsEdit = Convert.ToBoolean(x["IsEdit"]),
                                IsDelete = Convert.ToBoolean(x["IsDelete"]),
                                IsPrint = Convert.ToBoolean(x["IsPrint"]),
                                ModuleID = Convert.ToInt32(x["ModuleID"]),
                                Module = Convert.ToString(x["Module"]),
                                MenuID = Convert.ToInt32(x["MenuID"]),
                                Menu = Convert.ToString(x["MenuName"])
                            }).ToList();
                        }
                    }

                    _logindetails.UserRoles = _UserRoles;
                    return _logindetails;
                });
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", "LoginRepo/VerifyLogin", ex.Message);
                return _logindetails;
            }
        }



    }
}
