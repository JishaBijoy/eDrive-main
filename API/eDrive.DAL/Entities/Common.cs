using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eDrive.DAL.Entities
{
    public class Common
    {
        public int RefId { get; set; }
        public int ID { get; set; }
        public string Description { get; set; }
        public int TypeId { get; set; }
    }
    public class SaveStaus
    {
        public int StatusId { get; set; }
        public int RefId { get; set; }
        public string Message { get; set; }
    }

}
