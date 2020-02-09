using System;
using System.Collections.Generic;
using System.Linq;
using Notesb.Models;
using MongoDB.Driver;

namespace Notesb.Pagination
{
    public class PagedData
    {
        private List<Notes> notes;

        public ResponseModel responseModel = new ResponseModel();
        public PagedData(List<Notes> notes,int totalPages,int currentPage)
        {
            this.responseModel.Result = notes;
            this.responseModel.totalnotes = totalPages;
            this.responseModel.currentPage = currentPage;
        }

        [Obsolete]
        public static PagedData GetPagedData(IMongoCollection<Notes> notes,int pageNumber,int pageSize)
        {
            List<Notes> data = notes.Find(notes => true).Skip((pageNumber - 1) * pageSize).Limit(pageSize).ToList();

            var count = notes.Count(notes=>true);         

            int totalPageCount =(int) Math.Ceiling(count /(double) pageSize);

            PagedData pagedData = new PagedData(data, totalPageCount,pageNumber);

            return pagedData;
        }
    }
}
