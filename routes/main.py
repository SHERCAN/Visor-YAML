from typing import Optional
from pydantic import BaseModel
from fastapi import Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import datetime as dt
from fastapi import APIRouter
from starlette.responses import RedirectResponse
from pyModbusTCP.client import ModbusClient
import pathlib
import json
from typing import Dict
from yaml import dump, safe_load
c = ModbusClient(host="localhost", port=502, unit_id=1,
                 auto_open=False, auto_close=False)
web = APIRouter()
templates = Jinja2Templates(directory='templates')


class ModelSettings(BaseModel):
    dataframe: Dict


@ web.get('/', response_class=HTMLResponse)
async def main(request: Request):
    with open('settings_clinet.yml', 'r') as file:
        prime_service = safe_load(file)
    context = {'request': request, 'data': prime_service['data']}
    return templates.TemplateResponse('index.html', context=context)
