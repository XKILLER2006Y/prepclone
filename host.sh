#!/usr/bin/env bash
# host.sh - One-click management for PrepClone live hosting

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=8901
LOG_DIR="/tmp/opencode"
SERVER_LOG="$LOG_DIR/srv.log"
TUNNEL_LOG="$LOG_DIR/tunnel.log"
CLOUDFLARED_BIN="$LOG_DIR/cloudflared"

mkdir -p "$LOG_DIR"

status() {
    echo "=== PrepClone Hosting Status ==="
    SERVER_PID=$(pgrep -f "python3 -m http.server $PORT" || true)
    TUNNEL_PID=$(pgrep -f "cloudflared tunnel --url http://127.0.0.1:$PORT" || true)

    if [ -n "$SERVER_PID" ]; then
        echo "✅ Web Server: RUNNING (PID $SERVER_PID, port $PORT)"
    else
        echo "❌ Web Server: STOPPED"
    fi

    if [ -n "$TUNNEL_PID" ]; then
        echo "✅ Cloudflare Tunnel: RUNNING (PID $TUNNEL_PID)"
        LIVE_URL=$(grep -o "https://[-a-z0-9.]*\.trycloudflare\.com" "$TUNNEL_LOG" | tail -n 1)
        if [ -n "$LIVE_URL" ]; then
            echo "🌐 Live Public URL: $LIVE_URL"
        else
            echo "⚠️  Tunnel active, URL initializing..."
        fi
    else
        echo "❌ Cloudflare Tunnel: STOPPED"
    fi
}

start() {
    SERVER_PID=$(pgrep -f "python3 -m http.server $PORT" || true)
    if [ -z "$SERVER_PID" ]; then
        echo "Starting local web server on port $PORT..."
        nohup python3 -m http.server $PORT --bind 127.0.0.1 --directory "$ROOT_DIR" > "$SERVER_LOG" 2>&1 &
        sleep 1
    else
        echo "Web server already running on port $PORT."
    fi

    TUNNEL_PID=$(pgrep -f "cloudflared tunnel --url http://127.0.0.1:$PORT" || true)
    if [ -z "$TUNNEL_PID" ]; then
        if [ ! -f "$CLOUDFLARED_BIN" ]; then
            echo "Downloading cloudflared binary..."
            curl -sL https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o "$CLOUDFLARED_BIN"
            chmod +x "$CLOUDFLARED_BIN"
        fi
        echo "Launching Cloudflare Tunnel..."
        nohup "$CLOUDFLARED_BIN" tunnel --url "http://127.0.0.1:$PORT" > "$TUNNEL_LOG" 2>&1 &
        echo "Waiting for live URL..."
        for i in {1..15}; do
            sleep 1
            LIVE_URL=$(grep -o "https://[-a-z0-9.]*\.trycloudflare\.com" "$TUNNEL_LOG" | tail -n 1)
            if [ -n "$LIVE_URL" ]; then
                echo "🎉 Site is LIVE at: $LIVE_URL"
                break
            fi
        done
    else
        LIVE_URL=$(grep -o "https://[-a-z0-9.]*\.trycloudflare\.com" "$TUNNEL_LOG" | tail -n 1)
        echo "Tunnel already running!"
        echo "🌐 Live Public URL: $LIVE_URL"
    fi
}

stop() {
    echo "Stopping PrepClone server and tunnel..."
    pkill -f "cloudflared tunnel --url http://127.0.0.1:$PORT" || true
    pkill -f "python3 -m http.server $PORT" || true
    echo "Stopped."
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        stop
        sleep 1
        start
        ;;
    status|*)
        status
        ;;
esac
