using AmplyfiDataset.BusinessLogic;
using Microsoft.AspNetCore.Mvc;

namespace AmplyfiDataset.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly BulkJsonImporter _importer;

        public DataController()
        {
            _importer = new BulkJsonImporter();
        }
        
        [HttpPost]
        public void Import(int amount = 200)
        {
            _importer.ImportDataToElasticsearch(amount);
        }

        [HttpDelete]
        public void Delete()
        {
            _importer.DeleteElasticIndex();
        }

        // TODO: Parameterless get
        [HttpGet]
        public JsonResult Get(string filter, string value)
        {
            return new JsonResult(_importer.QueryElasticsearch(filter, value));
        }
    }
}
