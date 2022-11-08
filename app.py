# -----------------------------------modules-----------------------------
import uvicorn
from fastapi import FastAPI
from routes.main import web
from config.var_env import mode
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


# -----------------------------------run---------------
app = FastAPI(title='Configrator YAML',
              description='Configuration of the YAML file', version='0.0.1')
templates = Jinja2Templates(directory='templates')
app.include_router(web)
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/static", StaticFiles(directory="static"), name="js")

if __name__ == '__main__':
    if mode == 'TEST':
        uvicorn.run('app:app', log_level='trace', access_log=True, reload=True)
    else:
        uvicorn.run(app='app:app', host='0.0.0.0', port=81,
                    log_level='info', access_log=False)
