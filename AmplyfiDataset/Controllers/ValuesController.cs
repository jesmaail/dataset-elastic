using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using RestSharp;

namespace AmplyfiDataset.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // Want to have actions to clear down elasticsearch and to import (have an amount on the import and limit the ++ by that limit).

        [HttpPost]
        public void Import()
        {
            var filePath = "../data/";

            var directoryInfo = new DirectoryInfo(filePath);
            var files = directoryInfo.GetFiles("*.json");
            var restsharpClient = new RestClient("http://localhost:9200");

            var indexName = "electric";
            var type = "json";
            var index = 1; // want to have a ++ on this


            var request = new RestRequest($"{indexName}/{type}/{index}");

            request.AddJsonBody(new
            {
                DocId = "252",
                DocTitle = "Big Opportunity Now For Miami To Establish Commuter Rail Downtown | CleanTechnica"
            });

            var response = restsharpClient.Execute(request, Method.PUT);
        }
    }
}
