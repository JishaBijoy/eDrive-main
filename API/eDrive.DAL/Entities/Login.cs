using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eDrive.DAL.Entities
{
    public class LoginModel
    {
        public int UserID { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public string UserName { get; set; }
        public string TokenKey { get; set; }
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeImage { get; set; }
        public List<UserRoles> UserRoles { get; set; }
    }

    public class UserRoles
    {
        public bool IsCreate { get; set; }
        public bool IsView { get; set; }
        public bool IsEdit { get; set; }
        public bool IsDelete { get; set; }
        public bool IsPrint { get; set; }
        public int ModuleID { get; set; }
        public string Module { get; set; }
        public int MenuID { get; set; }
        public string Menu { get; set; }

    }
}
