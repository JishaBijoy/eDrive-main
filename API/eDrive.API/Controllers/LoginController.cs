using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using eDrive.DAL.Entities;
using eDrive.DAL.Repository;

namespace eDrive.API.Controllers
{
    [Route("[controller]/{action}")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginRepo _ILoginRepo;
        public LoginController(ILoginRepo iLoginRepo)
        {
            _ILoginRepo = iLoginRepo;
        }

        [HttpGet("Login/VerifyLogin")]
        public async Task<LoginModel> VerifyLogin(string UName, string UPwd)
        {
            LoginModel objLogin = await _ILoginRepo.VerifyLogin(UName, UPwd);
            if (objLogin.UserID > 0)
                return GenerateToken(objLogin);
            else
                return objLogin;

        }

        private LoginModel GenerateToken(LoginModel lg)
        {
            if (lg != null)
            {
                lg.TokenKey = eDrive.API.Services.TokenManager.GenerateToken(lg.TokenKey);
            }
            return lg;
        }
    }
}
