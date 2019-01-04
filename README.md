# Amplyfi Dataset

## To-Do
- Find something __interesting__ to do with the dataset (electric cars)
    - Have a search by each _category(?)_ e.g. Companies, Source type, geo, etc.
    - Present the data in a more broken down fashion to leave interpretation up to the user.

- Load JSON Data into Elasticsearch for simple querying
    - Filebeats?

- What kind of application?
    - MVC
        - Favour the API route.
    - API
        - Return JSONResult? (maybe won't work for a lot of data points)
        - Return FileResult? (will probably want it formatted better)
        - Could attach a Front-End (React? Do this as extra)

- RestSharp Elasticsearch requests

- __Hosting!__

- Set up Elasticsearch Docker-Compose (Setup instructions otherwise)


---

## Elasticsearch on Docker

### Setup
```
$ docker pull docker.elastic.co/elasticsearch/elasticsearch:6.5.4
```

```
$ docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.5.4
```

### Postman
```
http://localhost:9200/_search?q=
```