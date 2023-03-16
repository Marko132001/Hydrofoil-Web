# Hydrofoil-Web

## Docker-compose setup:

### Delete containers: docker-compose down -v
### Build and run containers: 
### 1. docker-compose pull
### 2. docker-compose build && docker-compose up -d

### Postgres database:

### Populate postgres database with data: docker exec -i <CONTAINER> psql -U <USER> -d <DB-NAME> < <PATH-TO-DUMP>
