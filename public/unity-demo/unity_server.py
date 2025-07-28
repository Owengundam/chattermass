#!/usr/bin/env python3
import http.server
import socketserver
import os

class UnityHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP Request Handler for Unity WebGL builds with Brotli compression support"""
    
    def end_headers(self):
        """Set Content-Encoding: br for Brotli compressed files"""
        if self.path.endswith('.br'):
            self.send_header('Content-Encoding', 'br')
        
        # Add CORS headers for Unity WebGL
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        
        # Add cache control to prevent caching issues during development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        super().end_headers()
    
    def do_GET(self):
        """Handle GET requests with proper Content-Type and Content-Encoding for Unity files"""
        path = self.translate_path(self.path)
        
        # Handle Brotli compressed JavaScript files
        if path.endswith('.js.br'):
            if os.path.exists(path):
                with open(path, 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/javascript')
                self.end_headers()
                self.wfile.write(content)
                return
        
        # Handle Brotli compressed WebAssembly files
        elif path.endswith('.wasm.br'):
            if os.path.exists(path):
                with open(path, 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/wasm')
                self.end_headers()
                self.wfile.write(content)
                return
        
        # Handle Brotli compressed data files
        elif path.endswith('.data.br'):
            if os.path.exists(path):
                with open(path, 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/octet-stream')
                self.end_headers()
                self.wfile.write(content)
                return
        
        # Handle other Brotli compressed files
        elif path.endswith('.br'):
            if os.path.exists(path):
                with open(path, 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/octet-stream')
                self.end_headers()
                self.wfile.write(content)
                return
        
        # Handle regular WebAssembly files
        elif path.endswith('.wasm'):
            if os.path.exists(path):
                with open(path, 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/wasm')
                self.end_headers()
                self.wfile.write(content)
                return
        
        # For all other files, use the default behavior
        super().do_GET()

if __name__ == "__main__":
    PORT = 8000
    
    with socketserver.TCPServer(("", PORT), UnityHandler) as httpd:
        print(f"🎮 Unity WebGL Server running at:")
        print(f"   Local: http://localhost:{PORT}")
        print(f"   Network: http://[your-ip]:{PORT}")
        print()
        print("✅ Brotli compression support enabled")
        print("✅ CORS headers configured for Unity WebGL")
        print("✅ Cache headers disabled for development")
        print()
        print("🌐 Open your browser and go to: http://localhost:8000")
        print("🛑 Press Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Shutting down the server...")
            httpd.shutdown() 