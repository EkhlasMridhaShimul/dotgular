using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Notesb.Models
{
    public class UserModel
    {
        [BsonRepresentation(BsonType.Int32)]
        public int _id { get; set; }

        [BsonElement("username")]
        public string userName { get; set; }

        [BsonElement("email")]
        public string email { get; set; }

        [BsonElement("details")]
        public UserDetail details { get; set; }
    }
}
