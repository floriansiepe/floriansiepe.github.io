# Build stage
FROM klakegg/hugo:ext-ubuntu AS builder

# Set working directory
WORKDIR /src

# Copy the entire repository
COPY . .

# Build the website
RUN hugo --minify

# Serve stage
FROM nginx:alpine

# Copy the nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built website from builder stage
COPY --from=builder /src/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]