using System;
using System.Linq;
using MongoDB.Driver;
using Notesb.Models;
using Notesb.Pagination;

namespace Notesb.Services
{
    public class NotesService
    {
        private readonly IMongoCollection<Notes> _notes;

        public NotesService(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConectionString);
            var database = client.GetDatabase(settings.DataBaseName);

            _notes = database.GetCollection<Notes>(settings.NotesCollection);
        }

        [Obsolete]
        public PagedData Get(PageParameters pageParameters)
        {
            return PagedData.GetPagedData(_notes, pageParameters.PageNumber, pageParameters.PageSize);
        }

        public Notes Get(string id) => _notes.Find(note => note.Id == id).FirstOrDefault();

        public Notes Create(Notes notes)
        {
            _notes.InsertOne(notes);
            return notes;
        }

        public void Update(Notes noteInput)
        {
            _notes.ReplaceOne(notes => notes.Id == noteInput.Id, noteInput);
        }

        public void Delete(Notes notesInput)
        {
            _notes.DeleteOne(note => note.Id == notesInput.Id);
        }
    }
}
