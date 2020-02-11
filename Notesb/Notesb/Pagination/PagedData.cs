using System;
using System.Collections.Generic;
using System.Linq;
using Notesb.Models;
using MongoDB.Driver;

namespace Notesb.Pagination
{
    public class PagedData<T>
    {
        public ResponseModel<T> responseModel = new ResponseModel<T>();
        public PagedData(List<T> notes,int totalPages,int currentPage)
        {
            this.responseModel.Result = notes;
            this.responseModel.totalnotes = totalPages;
            this.responseModel.currentPage = currentPage;
        }

        [Obsolete]
        public static PagedData<T> GetPagedData(IMongoCollection<T> notes,int pageNumber,int pageSize)
        {
            List<T> data = notes.Find(notes => true).Skip((pageNumber - 1) * pageSize).Limit(pageSize).ToList();

            var count = notes.Count(notes=>true);         

            int totalPageCount =(int) Math.Ceiling(count /(double) pageSize);

            PagedData<T> pagedData = new PagedData<T>(data, totalPageCount,pageNumber);

            return pagedData;
        }
    }
}
