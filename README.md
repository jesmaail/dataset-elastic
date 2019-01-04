# Amplyfi Dataset

## Goal: Perform something interesting on the dataset

- Giving the choice to the user.
- Looking to present the dataset to the end-user with filters to be able to select which data they find most relevant to them.

- Perhaps some pre-filtered data to demo. 
    - All data mentioning "Elon Musk".
    - Most popular Source Type (This can be predone logic on the BE)

--- 

## To-Do 
- Install Resharper (MUST)

- Extend the `JsonData` class with more data points (maybe rename?)

- Unit tests!

- Front-End
    - Display data and filter it
    - React & Axios?

- Rename `JsonImporter`?

- Refactor the `ElasticData` classes

--- 

## Nice-To-Haves
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