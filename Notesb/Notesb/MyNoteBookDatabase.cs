using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using Notesb.Models;

namespace Notesb
{
    public class MyNoteBookDatabase : IMyNoteBookDatabase
    {
        public IMongoDatabase database;
        public MyNoteBookDatabase(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConectionString);
            database = client.GetDatabase(settings.DataBaseName);
        }

        public IMongoDatabase GetMyDatabase()
        {
            return database;
        }
    }

    public interface IMyNoteBookDatabase
    {
        public IMongoDatabase GetMyDatabase();
    }
}
