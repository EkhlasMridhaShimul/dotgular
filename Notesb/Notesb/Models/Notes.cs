using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Notesb.Models
{
    public class Notes
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Post")]
        public string Post { get; set; }
    }
}
