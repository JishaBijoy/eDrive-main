using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;


namespace eDrive.API.Services
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            string Auth_Key = context.HttpContext.Request.Headers["Authorization"];
            string UserId = context.HttpContext.Request.Headers["UserId"];
            if (!string.IsNullOrEmpty(Convert.ToString(Auth_Key)) && !string.IsNullOrEmpty(Convert.ToString(UserId)) && Convert.ToString(Auth_Key) != "undefined")
            {
                string tokenserver = TokenManager.ValidateToken(Convert.ToString(Auth_Key).Trim());

                if (tokenserver != null && tokenserver != "")
                {
                    //Dictionary<string, SqlParameter> queryParameters = new Dictionary<string, SqlParameter>();
                    //queryParameters["@TokenKey"] = new SqlParameter("@TokenKey", tokenserver);
                    //queryParameters["@CustomerID"] = new SqlParameter("@CustomerID", UserId);
                    //var _Result = new SqlDatabaseUtility().ExecuteCommandReturnValue("[Customers].[ValidateToken]", queryParameters);
                    //if (Convert.ToInt32(_Result) != 1)
                    //    context.Result = new JsonResult(new { message = "Unauthorized1" }) { StatusCode = StatusCodes.Status401Unauthorized };
                }
                else
                    context.Result = new JsonResult(new { message = "Unauthorized2" }) { StatusCode = StatusCodes.Status401Unauthorized };
            }
            else
            {
                context.Result = new JsonResult(new { message = "Unauthorized3"}) { StatusCode = StatusCodes.Status401Unauthorized };
            }

        }
    }
}
