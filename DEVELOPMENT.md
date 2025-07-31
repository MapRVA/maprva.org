# Development

Using either Podman or Docker Compose, follow these instructions to serve maprva.org on [localhost:4000](http://localhost:4000)

## Podman

Running a development server locally using podman:
```
podman build -t maprva.org . && podman run -d -v .:/mnt:Z -p 4000:4000 -p 35729:35729 --replace --name maprva.org maprva.org
```

## Docker Compose

To run with docker compose, run:
```
docker compose up
```
