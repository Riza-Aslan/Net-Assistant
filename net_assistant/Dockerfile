ARG BUILD_FROM
FROM $BUILD_FROM

# Install dependencies: Python, Node.js, and build tools for python packages
RUN apk add --no-cache \
    nodejs \
    npm \
    python3 \
    py3-pip \
    bash \
    gcc \
    musl-dev \
    python3-dev \
    libffi-dev

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
RUN mkdir -p /app/backend/dist && cp -r /app/frontend/dist/* /app/backend/dist/

WORKDIR /
RUN chmod a+x /run.sh
CMD [ "/run.sh" ]
