from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(["GET"])
def get_routes(request):
    routes = [
        {"Endpoint": "/api/token", "Method": "POST", "Description": ""},
        {"Endpoint": "/api/token/refresh", "Method": "POST", "Description": ""},
    ]

    return Response(routes)
