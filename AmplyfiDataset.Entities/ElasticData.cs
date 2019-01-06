using Newtonsoft.Json;
using System.Collections.Generic;

namespace AmplyfiDataset.Entities
{
    public class ElasticData
    {
        [JsonProperty("hits")]
        public ElasticResult Result { get; set; }
    }

    public class ElasticResult
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

        [JsonProperty("_score")]
        public double Score { get; set; }
    }
}
