using System.Collections.Generic;

namespace Notesb.Models
{
    public class ResponseModel<T>
    {
        public List<T> Result { get; set; }

        public int totalData { get; set; }

        public int currentPage { get; set; }
    }
}
