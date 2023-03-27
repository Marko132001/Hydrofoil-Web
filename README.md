# Hydrofoil-Web

## Docker-compose setup:

### Delete containers: docker-compose down -v
### Build and run containers: 
### 1. docker-compose pull
### 2. docker-compose build && docker-compose up -d

### Rebuild containers:
docker-compose up --build --force-recreate
### Postgres database:

### Populate postgres database with data: 
docker exec -i <CONTAINER> psql -U <USER> -d <DB-NAME> < <PATH-TO-DUMP>

## DIGITALOCEAN PRODUCTION POSTGRES DATABASE:

### Dump database data
pg_dump -h <_host> -U <_username> -p <_port> -Fc <database_name> > digocean_backup.pgsql

### Import database data
pg_restore --verbose --clean --no-acl --no-owner -h <_host> -U <_username> -p <_port> -d <database_name> digocean_backup.pgsql


