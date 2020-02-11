using System.Collections.Generic;

namespace Notesb.Models
{
    public class ResponseModel<T>
    {
        public List<T> Result { get; set; }

        public int totalnotes { get; set; }

        public int currentPage { get; set; }
    }
}
