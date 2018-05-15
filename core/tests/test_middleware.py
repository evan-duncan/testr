from django.test import TestCase, override_settings


class AuthRequiredMiddlewareTestCase(TestCase):

    @override_settings(WHITELIST_ROUTES=["/license/", "/accounts/login/"])
    def test_route_whitelist(self):
        response = self.client.get("/license/")
        self.assertEqual(200, response.status_code)
        response = self.client.get("/projects/")
        self.assertRedirects(response, "/accounts/login/?next=/projects/")