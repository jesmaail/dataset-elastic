using Newtonsoft.Json;
using System.Collections.Generic;

namespace AmplyfiDataset.BusinessLogic
{
    public class JsonData
    {
        [JsonProperty("m_szDocID")]
        public int DocumentId { get; set; }

        [JsonProperty("m_szDocTitle")]
        public string DocumentTitle { get; set; }

        [JsonProperty("m_szYear")]
        public int Year { get; set; }

        [JsonProperty("m_szDocSumamry")] // Funny little typo ;)
        public string DocumentSummary { get; set; }

        [JsonProperty("m_szDocBody")]
        public string Body { get; set; }


        [JsonProperty("m_szGeo1")]
        public string Geo { get; set; }

        [JsonProperty("m_szSourceType")]
        public string SourceType { get; set; }

        [JsonProperty("m_szSrcUrl")]
        public string SourceUrl { get; set; }


        [JsonProperty("m_Places")]
        public List<string> Places { get; set; }

        [JsonProperty("m_People")]
        public List<string> People { get; set; }

        [JsonProperty("m_Companies")]
        public List<string> Companies { get; set; }

        // Extra data points left e.g. nGrams, tags, topics
    }
}
