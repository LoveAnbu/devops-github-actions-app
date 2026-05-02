FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies (secure + reproducible)
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Copy only required files
COPY . .

# Create non-root user (security best practice)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose port
EXPOSE 8000

# Start app
CMD ["node", "app.js"]
