docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otel4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t otel4/app ../..
