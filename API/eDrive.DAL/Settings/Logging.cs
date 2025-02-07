using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eDrive.DAL.Settings
{
    public  class Logging
    {
        public static void WriteLog(string LogType, string LogDetails, string Message)
        {
            try
            {
                Task.Factory.StartNew(() =>
                {
                    string ErrorLogDir = AppDomain.CurrentDomain.BaseDirectory + "\\ErrorLog\\";
                    string ErrorLogFileName = string.Format("ServiceErrorLog-{0:yyyy-MMM-dd}.txt", DateTime.Now);
                    if (!Directory.Exists(ErrorLogDir))
                        Directory.CreateDirectory(ErrorLogDir);
                    if (!File.Exists(ErrorLogDir + "/" + ErrorLogFileName))
                    {
                        var myFile = File.Create(ErrorLogDir + "/" + ErrorLogFileName);
                        myFile.Close();
                    }

                    using (StreamWriter writer = new StreamWriter(ErrorLogDir + "/" + ErrorLogFileName, true))//Error File Name
                    {
                        writer.WriteLine("Time:" + DateTime.Now.ToString("dd-MMM-yyyy HH:mm") + ":::" + LogType + ":::" + LogDetails + ":::" + Message);
                        writer.WriteLine("-------------------------------------------------------------------------------------------------------------------------------------------");
                        writer.Close();
                    };
                    //Create Log here
                }, TaskCreationOptions.LongRunning);
            }
            catch (Exception)
            { }
        }
    }
}
