using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Options;

namespace eDrive.DAL.Settings
{
    public class SqlDatabaseUtility : ISqlDatabaseUtility
    {
        private bool disposedValue;

        internal DataTable DataReader2DataTable(IDataReader dataReader)
        {
            using (DataTable schemaTable = dataReader.GetSchemaTable())
            {
                using (DataTable resultTable = new DataTable())
                {
                    foreach (DataRow dataRow in schemaTable.Rows)
                    {
                        using (DataColumn dataColumn = new DataColumn
                        {
                            ColumnName = dataRow["ColumnName"].ToString(),
                            DataType = Type.GetType(dataRow["DataType"].ToString()),
                            ReadOnly = (bool)dataRow["IsReadOnly"],
                            AutoIncrement = (bool)dataRow["IsAutoIncrement"],
                            Unique = (bool)dataRow["IsUnique"]
                        })
                        {
                            resultTable.Columns.Add(dataColumn);
                        }
                    }
                    while (dataReader.Read())
                    {
                        DataRow dataRow = resultTable.NewRow();
                        for (int i = 0; i < resultTable.Columns.Count - 1; i++)
                        {
                            dataRow[i] = dataReader[i];
                        }
                        resultTable.Rows.Add(dataRow);
                    }
                    return resultTable;
                }
            }
        }

        public DataSet ExecuteQuerySDA(SqlCommand cmd)
        {
            DataSet ds = new DataSet();

            try
            {
                using (SqlConnection cn = new SqlConnection(Connections.ConnectionString))
                {
                    if (cn.State == ConnectionState.Closed)
                        cn.Open();

                    cmd.Connection = cn;

                    using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                    {
                        da.Fill(ds);
                    }
                }
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", cmd.CommandText, ex.Message);
                throw ex;
            }

            return ds;


        }

        public SqlDataReader ExecuteQuerySDR(SqlCommand cmd)
        {
            using (SqlConnection cn = new SqlConnection(Connections.ConnectionString))
            {
                if (cn.State == ConnectionState.Closed)
                    cn.Open();

                cmd.Connection = cn;
                return cmd.ExecuteReader(CommandBehavior.CloseConnection);
            }

        }
        public object ExecuteScalarCommand(SqlCommand cmd)
        {
            object rc;

            try
            {
                using (SqlConnection cn = new SqlConnection(Connections.ConnectionString))
                {
                    if (cn.State == ConnectionState.Closed)
                        cn.Open();

                    cmd.Connection = cn;

                    rc = cmd.ExecuteScalar();
                   
                }
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", cmd.CommandText, ex.Message);
                throw ex;
            }

            return rc;
        }

        public int ExecuteCommand(SqlCommand cmd)
        {
            int rc;

            try
            {
                using (SqlConnection cn = new SqlConnection(Connections.ConnectionString))
                {
                    if (cn.State == ConnectionState.Closed)
                        cn.Open();

                    cmd.Connection = cn;

                    rc = cmd.ExecuteNonQuery();
                    
                    //if (cn.State == ConnectionState.Open)
                    //    cn.Close();
                }
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", cmd.CommandText, ex.Message);
                throw ex;
            }

            return rc;
        }

        public object ExecuteCommandReturnValue(SqlCommand cmd)
        {
            object rc;
            try
            {
                using (SqlConnection cn = new SqlConnection(Connections.ConnectionString))
                {
                    if (cn.State == ConnectionState.Closed)
                        cn.Open();

                    cmd.Connection = cn;

                    SqlParameter RetVal = cmd.Parameters.Add("@returnValue", SqlDbType.Int);
                    RetVal.Direction = ParameterDirection.ReturnValue;

                    cmd.ExecuteNonQuery();

                    rc = RetVal.Value;
                }
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", cmd.CommandText, ex.Message);
                throw ex;
            }

            return rc;
        }

        public string ExecuteQueryScalar(SqlCommand cmd)
        {
            string result = string.Empty;

            try
            {
                using (SqlConnection cn = new SqlConnection(Connections.ConnectionString))
                {
                    if (cn.State == ConnectionState.Closed)
                        cn.Open();

                    cmd.Connection = cn;

                    result = Convert.ToString(cmd.ExecuteScalar());
                   
                }
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", cmd.CommandText, ex.Message);
                throw ex;
            }
            return result;
        }

        public string ExecuteReader(SqlCommand cmd)
        {
            string result = string.Empty;

            try
            {
                using (SqlConnection cn = new SqlConnection(Connections.ConnectionString))
                {
                    if (cn.State == ConnectionState.Closed)
                        cn.Open();

                    cmd.Connection = cn;

                    SqlDataReader dr = cmd.ExecuteReader();
                    if (dr.Read())
                    {
                        result = Convert.ToString(dr[0]);
                    }
                    dr.Close();
                    
                }
            }
            catch (Exception ex)
            {
                Logging.WriteLog("Error", cmd.CommandText, ex.Message);
                throw ex;
            }
            return result;
        }

        void ISqlDatabaseUtility.Dispose(bool disposing)
        {
            
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects)
                }

                // TODO: free unmanaged resources (unmanaged objects) and override finalizer
                // TODO: set large fields to null
                disposedValue = true;
            }
        }

        // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        ~SqlDatabaseUtility()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: false);
        }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        
    }
}
