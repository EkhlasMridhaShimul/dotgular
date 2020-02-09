using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notesb.Models
{
    public class ResponseModel
    {
        public List<Notes> Result { get; set; }

        public int totalnotes { get; set; }

        public int currentPage { get; set; }
    }
}
