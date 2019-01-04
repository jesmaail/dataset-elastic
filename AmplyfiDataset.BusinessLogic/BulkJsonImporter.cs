using Newtonsoft.Json;
using RestSharp;
using System.IO;

namespace AmplyfiDataset.BusinessLogic
{
    public class BulkJsonImporter
    {

        public void ImportDataToElasticsearch(int maxDocuments)
        {
            var filePath = "../data/";

            var directoryInfo = new DirectoryInfo(filePath);
            var files = directoryInfo.GetFiles("*.json");

            var count = 1;

            foreach(var file in files)
            {
                if(count > maxDocuments) return;

                var data = MapFileToDataObject(file.FullName);

                PutDataToElasticsearch(data, count);
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

        // Refactor constants
        public void PutDataToElasticsearch(JsonData data, int id)
        {            
            var restsharpClient = new RestClient("http://localhost:9200");

            var indexName = "electric"; 
            var type = "json";

            var request = new RestRequest($"{indexName}/{type}/{id}");

            request.AddJsonBody(data);

            var response = restsharpClient.Execute(request, Method.PUT);
        }

        // Maybe live somewhere else? Not necessarily part of Importer respsonsibility
        // If so, move RestRequest logic with it. 
        // AmplyfiDataset.ElasticsearchWrapper (?)
        public void DeleteElasticIndex()
        {
            var restsharpClient = new RestClient("http://localhost:9200");

            var indexName = "electric";

            var request = new RestRequest($"{indexName}");
            

            var response = restsharpClient.Execute(request, Method.DELETE);
        }
    }
}
