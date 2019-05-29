FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

COPY *sln .
COPY DatasetElastic/*.csproj ./DatasetElastic/
COPY DatasetElastic.BusinessLogic/*.csproj ./DatasetElastic.BusinessLogic/
COPY DatasetElastic.ElasticsearchWrapper/*.csproj ./DatasetElastic.ElasticsearchWrapper/
COPY DatasetElastic.Entities/*.csproj ./DatasetElastic.Entities/
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/DatasetElastic/out .
ENTRYPOINT [ "dotnet", "DatasetElastic.dll" ]