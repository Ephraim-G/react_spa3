# creates .env file for env var into the site

echo "BUILD_PATH=_site" >> .env
echo "PUBLIC_URL=$BASEURL" >> .env