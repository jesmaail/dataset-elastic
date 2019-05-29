using DatasetElastic.Entities;
using Newtonsoft.Json;
using RestSharp;
using System.Linq;

namespace DatasetElastic.ElasticsearchWrapper
{
    public class ElasticsearchRequests
    {
        private readonly RestClient _client;

        private const string ELASTICSEARCH_ENDPOINT = "http://localhost:9200"; // Move to config?
        private const string INDEX_NAME = "electric";
        private const string TYPE = "json";
        private const string ELASTICSEARCH_SEARCH_STRING = "_search";

        public ElasticsearchRequests()
        {
            _client = new RestClient(ELASTICSEARCH_ENDPOINT);
        }
        
        public void PutData(JsonData data, int id)
        {
            var request = new RestRequest($"{INDEX_NAME}/{TYPE}/{id}");
            request.AddJsonBody(data);

            var response = _client.Execute(request, Method.PUT);
        }
        
        public void DeleteIndex()
        {
            var request = new RestRequest(INDEX_NAME);
            var response = _client.Execute(request, Method.DELETE);
        }

        public ElasticResult Query(string filter, string value, int amount, double threshold)
        {
            var searchString = string.Empty;
            if (filter == null || value == null)
            {
                searchString = $"{ELASTICSEARCH_SEARCH_STRING}?size={amount}";
            }
            else
            {
                searchString += $"{ELASTICSEARCH_SEARCH_STRING}?size={amount}&q={filter}:{value}";
            }

            var request = new RestRequest(searchString);

            var response = _client.Execute(request);

            var responseObject = JsonConvert.DeserializeObject<ElasticData>(response.Content);

            var result = responseObject.Result;


            if(threshold != -99)
            {
                var dataList = result.Data;

                var filteredData = dataList.Where(x => x.Score > threshold).ToList();

                result.Data = filteredData;
            }

            return result;
        }
    }
}
