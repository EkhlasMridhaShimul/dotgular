using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Notesb.Models
{
    public class UserModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("firstname")]
        public string firstName { get; set; }

        [BsonElement("lastname")]
        public string lastName { get; set; }

        [BsonElement("email")]
        public string email { get; set; }

        [BsonElement("user_age")]
        public int userAge { get; set; }

        [BsonElement("gender")]
        public string gender { get; set; }

        [BsonElement("user_about")]
        public string userAbout { get; set; }
    }
}
