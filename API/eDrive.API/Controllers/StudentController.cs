using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using eDrive.DAL.Entities;
using eDrive.DAL.Repository;
using eDrive.API.Services;

namespace eDrive.API.Controllers
{
    //[AuthorizeAttribute]
    [Route("[controller]/{action}")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepo _IStudentRepo;
        public StudentController(IStudentRepo iStudentRepo)
        {
            _IStudentRepo = iStudentRepo;
        }

        [HttpGet("Student/GetStudentCommon")]
        public async Task<List<Common>> GetStudentCommon()
        {
            return await _IStudentRepo.GetStudentCommon();

        }

        [HttpGet("Student/GetStudentList")]
        public async Task<List<StudentList>> GetStudentList()
        {
            return await _IStudentRepo.GetStudentList();

        }

        [HttpGet("Student/GetStudent")]
        public async Task<Student> GetStudent(int StudentId)
        {
            return await _IStudentRepo.GetStudent(StudentId);

        }

        [HttpPost("Student/StudentTransaction")]
        public async Task<SaveStaus> StudentTransaction(Student ObjStd)
        {
            return await _IStudentRepo.StudentTransaction(ObjStd);

        }
    }
}
