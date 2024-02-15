# GymBeam Case Study

Small FE (React) application to show and filter products retrieved from GymBeam API

Application listens on port `3000` both in `dev` and `preview` mode

To run application locally:
- `npm install`
- dev mode: `npm run dev`
- preview: `npm run build && npm run preview`

To run preview in docker run:
- `docker build -t gymbeam-product-page .` 
- `docker-run": "docker run --rm -d -p 3000:3000 --name gymbeam-product-page gymbeam-product-page`,
- or via npm `npm run docker-build && npm run docker-run`

To access category list visit `http://localhost:3000/sports-nutrition/`
