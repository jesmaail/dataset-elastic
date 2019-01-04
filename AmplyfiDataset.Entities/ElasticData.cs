using Newtonsoft.Json;
using System.Collections.Generic;

namespace AmplyfiDataset.Entities
{
    public class ElasticData
    {
        [JsonProperty("hits")]
        public Result Result { get; set; }
    }

    public class Result
    {
        [JsonProperty("total")]
        public int total { get; set; }

        [JsonProperty("hits")]
        public List<Data> Data { get; set; }
    }

    public class Data
    {
        [JsonProperty("_source")]
        public object Source { get; set; }
    }
}
