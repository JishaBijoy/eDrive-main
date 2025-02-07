using eDrive.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eDrive.DAL.Repository
{
    public  interface IStudentRepo
    {
        Task<List<Common>> GetStudentCommon();
        Task<List<StudentList>> GetStudentList();
        Task<Student> GetStudent(int StudentId);
        Task<SaveStaus> StudentTransaction(Student objStd);
    }
}
