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
        public PagedData(List<T> notes,int totalPages)
        {
            this.responseModel.Result = notes;
            this.responseModel.totalDocs = totalPages;
        }

        [Obsolete]
        public static PagedData<T> GetPagedData(IMongoCollection<T> docs,int pageNumber,int pageSize)
        {
            List<T> data = docs.Find(docs => true).Skip((pageNumber - 1) * pageSize).Limit(pageSize).ToList();

            int count =(int) docs.Count(docs => true);         

            PagedData<T> pagedData = new PagedData<T>(data, count);

            return pagedData;
        }
    }
}
