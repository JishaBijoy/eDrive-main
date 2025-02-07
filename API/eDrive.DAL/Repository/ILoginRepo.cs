using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using eDrive.DAL.Entities;

namespace eDrive.DAL.Repository
{
    public interface ILoginRepo
    {
        Task<LoginModel> VerifyLogin(string UserName, string UserPwd);
        
    }
}
