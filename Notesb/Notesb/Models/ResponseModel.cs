using System.Collections.Generic;

namespace Notesb.Models
{
    public class ResponseModel<T>
    {
        public List<T> Result { get; set; }

        public int totalPages { get; set; }

        public int currentPage { get; set; }
    }
}
