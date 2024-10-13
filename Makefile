.PHONY: help setup install format lint test clean run build

# Colors for terminal output
CYAN := \033[36m
RESET := \033[0m

# Node.js and pnpm
PNPM = pnpm

# Help target
help:
	@echo "$(CYAN)Available targets:$(RESET)"
	@echo "  $(CYAN)setup$(RESET)              : Set up the project (install pnpm if not present)"
	@echo "  $(CYAN)install$(RESET)            : Install project dependencies"
	@echo "  $(CYAN)format$(RESET)             : Format code"
	@echo "  $(CYAN)lint$(RESET)               : Lint code"
	@echo "  $(CYAN)test$(RESET)               : Run tests"
	@echo "  $(CYAN)pre-commit$(RESET)         : Run pre-commit hooks on all files"
	@echo "  $(CYAN)clean$(RESET)              : Clean up generated files and caches"
	@echo "  $(CYAN)run$(RESET)                : Run the development server"
	@echo "  $(CYAN)build$(RESET)              : Build the project for production"

# Set up the project
setup:
	@if ! command -v pnpm &> /dev/null; then \
		echo "Installing pnpm..."; \
		npm install -g pnpm; \
	fi
	pnpm setup
	$(PNPM) install pre-commit
	pre-commit install

# Install dependencies
install: setup
	$(PNPM) install

# Format code
format:
	$(PNPM) exec prettier --write "app/**/*.{js,jsx,ts,tsx,css,scss}" "content/**/*.mdx"

# Lint code
lint:
	$(PNPM) exec eslint "app/**/*.{js,jsx,ts,tsx}"

# Run tests
test:
	$(PNPM) test

# Run pre-commit hooks on all files
pre-commit:
	pre-commit run --all-files

# Clean up generated files
clean:
	rm -rf .pytest_cache
	rm -rf .mypy_cache
	rm -rf $(VENV)
	rm -rf frontend/node_modules

# Run the development server
run:
	$(PNPM) dev

# Build the project
build:
	$(PNPM) build
