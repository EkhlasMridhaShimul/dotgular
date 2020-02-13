using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Notesb.Models
{
    public class UserDetail
    {
        [BsonElement("firstname")]
        public string firstName { get; set; }

        [BsonElement("lastname")]
        public string lastName { get; set; }

        [BsonElement("age")]
        public int age { get; set; }

        [BsonElement("gender")]
        public string gender { get; set; }
    }
}
