namespace Notesb.Models
{
    public class DatabaseSettings :IDatabaseSettings
    {
        public string ConectionString { get; set; }
        public string DataBaseName { get; set; }
    }

    public interface IDatabaseSettings { 
        public string ConectionString { get; set; }
        public string DataBaseName { get; set; }
    }


}
