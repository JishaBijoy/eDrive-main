using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using eDrive.DAL.Entities;
using eDrive.DAL.Repository;
using Microsoft.Extensions.Hosting.Internal;

namespace eDrive.API.Controllers
{
    [Route("[controller]/{action}")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        public static IWebHostEnvironment _environment;
        public UploadController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost("Upload/UploadFile")]
        public async Task<string> UploadFile([FromForm] IFormFile file)
        {
            string fName = file.FileName;
            string path = Path.Combine(_environment.ContentRootPath, "Uploads/" + file.FileName);
            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            return file.FileName;
        }
    }
}
