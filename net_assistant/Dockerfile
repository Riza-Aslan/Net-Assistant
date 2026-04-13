ARG BUILD_FROM
FROM $BUILD_FROM

# Install dependencies config. Python and Node.js
RUN apk add --no-cache \
    nodejs \
    npm \
    python3 \
    py3-pip \
    uv \
    bash

# Copy root filesystem
COPY rootfs /

# Set working directory
WORKDIR /app

# Build Frontend
COPY frontend /app/frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Install Backend
WORKDIR /app/backend
COPY backend /app/backend
RUN pip3 install --no-cache-dir -r requirements.txt --break-system-packages

# Copy frontend build to backend static files location
# We will serve this via FastAPI
RUN mkdir -p /app/backend/dist && cp -r /app/frontend/dist/* /app/backend/dist/

WORKDIR /
RUN chmod a+x /run.sh
CMD [ "/run.sh" ]
