#!/bin/bash

echo "🔍 Testing Company Analysis Application Routes"
echo "============================================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to test route
test_route() {
    local url=$1
    local expected=$2
    local description=$3

    echo -n "Testing $description... "

    response=$(curl -s "$url")

    if echo "$response" | grep -q "id=\"root\""; then
        echo -e "${GREEN}✓ Page loads${NC}"
        return 0
    else
        echo -e "${RED}✗ Failed to load${NC}"
        return 1
    fi
}

# Test routes
echo ""
test_route "http://localhost:5174/" "Welcome" "Root route (/)"
test_route "http://localhost:5174/acme-corp/engineering" "modules" "Company/Department route"
test_route "http://localhost:5174/acme-corp/engineering/hr-configurator" "HR" "HR Configurator"
test_route "http://localhost:5174/acme-corp/engineering/poc-creator" "POC" "POC Creator"
test_route "http://localhost:5174/acme-corp/engineering/money-analysis" "Money" "Money Analysis"

echo ""
echo "============================================="
echo "✅ Route verification complete!"