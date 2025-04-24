# folkdance-practicer
A full-stack web application project for my Master's Degree. An app where individuals can learn about hungarian folk dance moves and songs.

Install dependencies for both projects:
`$ npm i`

Generate Multi-Label Classifier model with fdp_guesser/trainer.py. Install dependencies:
`$ ...`

Start docker container with PostgreSQL:
`$ docker run --name dev-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_DB=fdp_dev -p 5432:5432 -d postgres`

Start backend: 
`$ npm run start:dev`