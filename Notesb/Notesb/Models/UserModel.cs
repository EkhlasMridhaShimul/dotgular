using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Notesb.Models
{
    public class UserModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("username")]
        public string userName { get; set; }

        [BsonElement("email")]
        public string email { get; set; }
    }
}
