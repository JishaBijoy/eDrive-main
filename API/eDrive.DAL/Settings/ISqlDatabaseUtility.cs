using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace eDrive.DAL.Settings
{
    public  interface ISqlDatabaseUtility: IDisposable
    {
        int ExecuteCommand(SqlCommand cmd);
        object ExecuteCommandReturnValue(SqlCommand cmd);
        string ExecuteQueryScalar(SqlCommand cmd);
        DataSet ExecuteQuerySDA(SqlCommand cmd);
        SqlDataReader ExecuteQuerySDR(SqlCommand cmd);
        void Dispose(bool disposing);
    }
}
