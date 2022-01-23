# CPE-KMUTT-Web

## Getting Started

Preparing the server environment

### Server Setup

Install Docker and Docker-compose follow this link

- [Docker Setup](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
- [Docker-Compose Setup](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)

### Prerequisites

- MongoDB cli 4.x
- Mongo Restore (For Remote/Server)
- Ubuntu 18 (For server)
- mongo-tools

### Project Setup

##### Server Setup

clone project

```sh
git clone https://github.com/yee2542/CPE-KMUTT-Web
cd ./CPE-KMUTT-Web
```

### Docker

run projecy via Docker in dev environment

```bash
$ docker-compose -f docker-compose.dev.yml up --build
```

### Issues

#### DB

when db not start cause have no permission to create dir e.g.

`mkdir: cannot create directory`

fix by this command

```sh
sudo chown -R 1001 ./db
```

#### Strapi

default admin account

| username              | password  |
| --------------------- | --------- |
| admin@cpe.kmutt.ac.th | Admin2021 |

##### Common issues

Due to conflicting dependencies, stop the `cpe-kmutt-strapi` container and delete `/strapi/node_modules` before restarting the strapi container to install a correct dependence on its own. Do not use yarn to install dependencies.

##### Restore Strapi data

For testing stage, using mongo-tools for restore a data.

```bash
cd /qa/strapi

mongorestore --host="localhost:27017" --username root --password cpeKMUTT@WebSite --authenticationDatabase admin
```
