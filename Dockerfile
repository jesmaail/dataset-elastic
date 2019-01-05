FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

COPY *sln .
COPY AmplyfiDataset/*.csproj ./AmplyfiDataset/
COPY AmplyfiDataset.BusinessLogic/*.csproj ./AmplyfiDataset.BusinessLogic/
COPY AmplyfiDataset.ElasticsearchWrapper/*.csproj ./AmplyfiDataset.ElasticsearchWrapper/
COPY AmplyfiDataset.Entities/*.csproj ./AmplyfiDataset.Entities/
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/AmplyfiDataset/out .
ENTRYPOINT [ "dotnet", "AmplyfiDataset.dll" ]