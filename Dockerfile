FROM node:20-slim

# Install Python & Git
RUN apt-get update && apt-get install -y python3 python3-pip git curl && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

# Copy agent-folders system
COPY . /workspace

# Make scripts executable
RUN chmod +x bin/agent-folders.js scripts/*.py scripts/*.sh

# Validate architecture on build
RUN python3 scripts/validate-architecture.py

EXPOSE 3000

ENTRYPOINT ["./bin/agent-folders.js"]
CMD ["doctor"]
