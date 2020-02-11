using System;
using MongoDB.Driver;
using Notesb.Models;

namespace Notesb.Services
{
    public class UserDataService
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

    }
}
