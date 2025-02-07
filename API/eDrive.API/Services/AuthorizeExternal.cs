using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace eDrive.API.Services
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeExternal : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            string Auth_Key = context.HttpContext.Request.Headers["Authorization"];
            if (!string.IsNullOrEmpty(Convert.ToString(Auth_Key)) && Convert.ToString(Auth_Key) != "undefined")
            {
                if(Auth_Key != "AnBFoWOQa6Qymyj/q5jgJddTbKlXjj3VEBE2sGmu3Mx/7+p/DxGQhSKwbZL7VY9V")
                    context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
            }
            else
            {
                context.Result = new JsonResult(new { message = "Unauthorized1"}) { StatusCode = StatusCodes.Status401Unauthorized };
            }

        }
    }
}
