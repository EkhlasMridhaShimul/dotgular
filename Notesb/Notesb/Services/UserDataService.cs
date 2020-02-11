using System;
using System.Collections.Generic;
using MongoDB.Driver;
using Notesb.Models;
using Notesb.Pagination;

namespace Notesb.Services
{
    public class UserDataService : IUserDataService
    {
        private readonly IMongoCollection<UserModel> _user;
        public UserDataService(IMyNoteBookDatabase myNoteBookDatabase)
        {
            var database = myNoteBookDatabase.GetMyDatabase();

            _user = database.GetCollection<UserModel>("users");
        }

        public UserModel Create(UserModel userModel)
        {
            _user.InsertOne(userModel);
            return userModel;
        }
        [Obsolete]
        public PagedData<UserModel> Get(PageParameters pageParameters)
        {
            return PagedData<UserModel>.GetPagedData(_user, pageParameters.PageNumber, pageParameters.PageSize);
        }

        public UserModel Get(string id)
        {
            return _user.Find(user => user.Id == id).FirstOrDefault();
        }

        public void Update(UserModel userModel)
        {
            _user.ReplaceOne(user => user.Id == userModel.Id, userModel);
        }

        public void Delete(string id)
        {
            _user.DeleteOne(user => user.Id == id);
        }
    }

    public interface IUserDataService
    {
        public UserModel Create(UserModel userModel);
        public PagedData<UserModel> Get(PageParameters pageParameters);
        public UserModel Get(string id);
        public void Update(UserModel userModel);
        public void Delete(string id);
    }
}
