using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;


namespace eDrive.API.Services
{
    public class ApiCall
    {
        public static string MachineAPI { get { return "http://10.10.15.118:8088/YGTMiddleware/"; } }
        public static string MachineToken { get { return "8F037A86-B7EB-41E0-GH09-B952290FHJK04"; } }
        public static string SASServiceToken { get { return "8F037A86-B7EB-41E0-GH09-B952290FHJK04"; } }
        public static string SASAPIURL { get { return "https://liveslots.ysecit.in/SASAPI/api"; } }

        public async Task<string> CallApibyPostAsync<T>(string BaseAddress, string Url) where T : class
        {
            string t = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(BaseAddress);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync(Url);
                if (response.IsSuccessStatusCode)
                {
                   t= await response.Content.ReadAsStringAsync();
                    
                }
                else
                {
                    t = null;
                }
            }
            return t;
        }


        public async Task<string> CallApibyPostAsync<T>(string BaseAddress, string sFn, Dictionary<string, object> param = null) where T : class
        {
            string t = null;
           
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(BaseAddress);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.PostAsJsonAsync(sFn, param);
              
                if (response.IsSuccessStatusCode)
                {
                    t = await response.Content.ReadAsStringAsync();

                }
                else
                {
                    t = null;
                }
            }
            return t;
        }

       
        public async Task<DataSet> CallSASApibyPostAsync<T>(string BaseAddress, string sFn, Dictionary<string, object> param = null) where T : class
        {
            DataSet objSAS = new DataSet();

            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(BaseAddress);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.PostAsJsonAsync(sFn,param);

                if (response.IsSuccessStatusCode)
                {
                    var jsonvalue = response.Content.ReadAsStringAsync().Result;
                    objSAS = (DataSet)JsonConvert.DeserializeObject(jsonvalue, (typeof(DataSet)));

                }
                else
                {
                    objSAS = null;
                }
            }
            return objSAS;
        }
        
    }


}
