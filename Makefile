.PHONY: install format lint test clean

# Python virtual environment
VENV = venv
PYTHON = $(VENV)/bin/python
PIP = $(VENV)/bin/pip

# Default target
default: help

# Help prompt
help:
	@echo "Usage: make <target>"
	@echo "Targets:"
	@echo "  install    Install dependencies"
	@echo "  format     Format code"
	@echo "  lint       Lint code"
	@echo "  test       Run tests"
	@echo "  clean      Clean up generated files"
	@echo "  pre-commit Run pre-commit hooks on all files"
	@echo "  run-dev    Run development server"
# Install dependencies
install:
	python3 -m venv $(VENV)
	$(PIP) install -r requirements.txt
	$(PIP) install pre-commit
	pre-commit install

# Format code
format:
	$(PYTHON) -m black .
	$(PYTHON) -m isort .

# Lint code
lint:
	$(PYTHON) -m flake8 .
	$(PYTHON) -m mypy .

# Run tests
test:
	$(PYTHON) -m pytest

# Run pre-commit hooks on all files
pre-commit:
	pre-commit run --all-files

# Clean up generated files
clean:
	find . -type f -name '*.pyc' -delete
	find . -type d -name '__pycache__' -delete
	rm -rf .pytest_cache
	rm -rf .mypy_cache
	rm -rf $(VENV)

# Run development server
run-dev:
	pnpm run dev
