#!/bin/sh

# Load environment variables
if [ -f .env.local ]; then
  export $(cat .env.local | xargs)
fi

# Start the app
exec "$@"
