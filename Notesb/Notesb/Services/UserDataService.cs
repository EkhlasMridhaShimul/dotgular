using System.Collections.Generic;
using MongoDB.Driver;
using Notesb.Models;

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

        public List<UserModel> Get()
        {
            return _user.Find(user => true).ToList();
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
        public List<UserModel> Get();
        public UserModel Get(string id);
        public void Update(UserModel userModel);
        public void Delete(string id);
    }
}
