using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eDrive.DAL.Entities
{
    public class StudentList
    {
        public int StudentID { get; set; }
        public string FullName { get; set; }
        public string RegistrationNo { get; set; }
        public string IDNumber { get; set; }
        public string PhoneNo { get; set; }
        
    }
    public class Student
    {
        public int StudentID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string FullNameArabic { get; set; }
        public string Gender { get; set; }
        public string DateOfBirth { get; set; }
        public string RegistrationNo { get; set; }
        public string RegistrationDate { get; set; }
        public int NationalityID { get; set; }
        public string IDNumber { get; set; }
        public string Address { get; set; }
        public string PhoneNo { get; set; }
        public int SourceMediaID { get; set; }
        public string Email { get; set; }
        public bool HaveOtherNationalLicense { get; set; }
        public int SponsorTypeID { get; set; }
        public int SponsorID { get; set; }
        public string Remarks { get; set; }
        public string BloodType { get; set; }
        public int StatusID { get; set; }
        public int LocationID { get; set; }
        public int PendingTestID { get; set; }
        public string LearningLicenseNo { get; set; }
        public string LearningLicenseIssueDate { get; set; }
        public string LearningLicenseExpiryDate { get; set; }
        public string QIDExpiry { get; set; }
        public string Photo { get; set; }
        public string IDFront { get; set; }
        public string IDBack { get; set; }
        public int UserID { get; set; }
    }
}
