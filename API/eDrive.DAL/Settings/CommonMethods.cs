using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eDrive.DAL.Settings
{
    public static class CommonMethods
    {


        public static string Getbase64(object data)
        {
            string base64String = string.Empty;
            try
            {
                byte[] imageBytes = (byte[])data;
                base64String = Convert.ToBase64String(imageBytes);
            }
            catch { }
            return base64String;
        }
    }
}
