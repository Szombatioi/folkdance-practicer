# folkdance-practicer
A full-stack web application project for my Master's Degree. An app where individuals can learn about hungarian folk dance moves and songs.

Create the .env files for both the frontend and the backend.
Backend variables: \
`DATABASE_URL` - The PostgreSql DB's access address \
`DB_HOST` - address of the sql server \
`DB_PORT` - port of the sql server \
`DB_USERNAME` - username for the sql server \
`DB_PASSWORD` - password for the sql server \
`DB_DATABASE` - name of the database that the app will use \
`JWT_SECRET` - your JWT secret

Frontend variables:
`BACKEND_URL`

Install dependencies for both projects:
`$ npm i`

If you are working on Mac, create a virtual environment for the installations:
`$ python3 -m venv venv` \
`$ source venv/bin/activate`

Install python libs: \
`$ pip install -r requirements.txt`

Generate Multi-Label Classifier model with fdp_guesser/trainer.py. Install dependencies:
`$ ...`

Start docker container with PostgreSQL: \
`$ docker run --name dev-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_DB=fdp_dev -p 5432:5432 -d postgres`

Start backend: 
`$ npm run start:dev`

Start predictor:
`$ uvicorn <python script>:app --host 0.0.0.0 --port 3002`