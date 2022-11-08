from typing import Optional
from pydantic import BaseModel
from fastapi import Form

# implementación futura----------------------------------------------------------------


def form_body(cls):
    cls.__signature__ = cls.__signature__.replace(
        parameters=[
            arg.replace(default=Form(...))
            for arg in cls.__signature__.parameters.values()
        ]
    )
    return cls


@form_body
class Item(BaseModel):
    name: str
    another: str
