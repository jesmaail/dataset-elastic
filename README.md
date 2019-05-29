# Dataset & Elastic

## Goal: Perform something interesting on the dataset

- Giving the choice to the user.
- Looking to present the dataset to the end-user with filters to be able to select which data they find most relevant to them.

--- 
## Prerequisites:
- Elasticsearch (local install or Docker).
- .Net Core 2.2
- Node.js
- Postman

--- 
## Running the app
_Note: There is a supplied Postman collection with some requests_

### Running Elasticsearch
1. Have your elasticsearch instance running on port `9200`.
2. If for any reason it's on another port, the endpoint can be changed in `DatasetElastic.ElasticsearchWrapper.ElasticsearchWrapper` with the `ELASTICSEARCH_ENDPOINT` constant.

### Running the  App
1. Build and run `DatasetElastic.sln`.
2. Create a 'data/' directory in the root of the repository with your json files.
3. Send a request to import data from json files to elasticsearch.
    - For example `http://localhost:5000/api/data/import?amount=10000`.
4. Wait for the request `200`, this one takes a while....
    - Something like Filebeat or Logstash would have been better but in the interest of development time vs. research time into those I've done it manually.
    - Worth checking the elasticsearch instance that the data has uploaded as well.
5. Send a request to the DatasetElastic app to see the data come back from elasticsearch with what data we are concerned with.
    - For example `http://localhost:5000/api/data/get?filter=Places&value=Denver&amount=20&threshold=-99`.

## Running the DatasetElastic Web React Front-End
1. Navigate to `./frontend/datasetelastic-web` in terminal of choice.
2. Execute `npm start`.
3. With your browser of choice navigate to `http://localhost:3000/`. 


---
---

## To-Do 

- Unit tests! (Potentially should have used TDD)

- Move Elasticsearch endpoint to config

- Dependency Injection?

- Revisit  `Filebeat` or `Logstash` for loading in data.

- Elasticsearch Docker-Compose

- API Docker-Compose

- Hosting

---
---

## Elasticsearch on Docker

### Setup
```
$ docker pull docker.elastic.co/elasticsearch/elasticsearch:6.5.4
```

```
$ docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.5.4
```