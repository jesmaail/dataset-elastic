using DatasetElastic.BusinessLogic;
using DatasetElastic.ElasticsearchWrapper;
using Microsoft.AspNetCore.Mvc;

namespace DatasetElastic.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly JsonImporter _importer;
        private readonly ElasticsearchRequests _elasticsearchRequests;

        public DataController()
        {
            _importer = new JsonImporter();
            _elasticsearchRequests = new ElasticsearchRequests();
        }
        
        [HttpPost]
        public void Import(int amount = 200)
        {
            _importer.ImportDataToElasticsearch(amount);
        }

        [HttpDelete]
        public void Delete()
        {
            _elasticsearchRequests.DeleteIndex();
        }
        
        [HttpGet]
        public JsonResult Get(string filter = null, string value = null, int amount = 5, double threshold = -99)
        {
            return new JsonResult(_elasticsearchRequests.Query(filter, value, amount, threshold));
        }
    }
}
