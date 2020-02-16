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
        public PagedData(List<T> notes,int totalPages,int currentPage,bool hasNext,bool hasPrevious)
        {
            this.responseModel.Result = notes;
            this.responseModel.totalPages = totalPages;
            this.responseModel.currentPage = currentPage;
            this.responseModel.hasNextPage = hasNext;
            this.responseModel.hasPreviousPage = hasPrevious;
        }

        [Obsolete]
        public static PagedData<T> GetPagedData(IMongoCollection<T> docs,int pageNumber,int pageSize)
        {
            List<T> data = docs.Find(docs => true).Skip((pageNumber - 1) * pageSize).Limit(pageSize).ToList();

            int count =(int) docs.Count(docs => true);         

            int totalPageCount =(int) Math.Ceiling(count /(double) pageSize);

            bool hasNext = pageNumber < totalPageCount;
            bool hasPrevious = pageNumber > 1;

            PagedData<T> pagedData = new PagedData<T>(data, count,pageNumber,hasNext,hasPrevious);

            return pagedData;
        }
    }
}
