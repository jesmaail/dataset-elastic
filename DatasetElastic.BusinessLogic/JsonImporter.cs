using DatasetElastic.ElasticsearchWrapper;
using DatasetElastic.Entities;
using Newtonsoft.Json;
using System.IO;

namespace DatasetElastic.BusinessLogic
{
    public class JsonImporter
    {
        private readonly ElasticsearchRequests _elasticsearchRequests;

        private const string FILE_PATH = "../data/";
        private const string FILE_SEARCH_PATTERN = "*.json";

        public JsonImporter()
        {
            _elasticsearchRequests = new ElasticsearchRequests();
        }

        public void ImportDataToElasticsearch(int maxDocuments)
        {
            var directoryInfo = new DirectoryInfo(FILE_PATH);
            var files = directoryInfo.GetFiles(FILE_SEARCH_PATTERN);

            var count = 1;

            foreach(var file in files)
            {
                if(count > maxDocuments) return;

                var data = MapFileToDataObject(file.FullName);

                _elasticsearchRequests.PutData(data, count);
                count++;
            }
        }

        public JsonData MapFileToDataObject(string filepath)
        {
            JsonData document;
            using (var sr = new StreamReader(filepath))
            {
                var jsonString = sr.ReadToEnd();

                document = JsonConvert.DeserializeObject<JsonData>(jsonString);
            }

            return document;
        }
    }
}
