#!/usr/bin/env python3
import http.server
import socketserver
import os
import brotli
import gzip
from urllib.parse import unquote

class UnityWebGLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Get the file path
        path = self.translate_path(self.path)
        
        # Check if it's a .br file
        if self.path.endswith('.br') and os.path.exists(path):
            try:
                # Read and decompress the Brotli file
                with open(path, 'rb') as f:
                    compressed_data = f.read()
                
                decompressed_data = brotli.decompress(compressed_data)
                
                # Send response
                self.send_response(200)
                
                # Set appropriate content type based on the original file
                original_path = self.path[:-3]  # Remove .br extension
                if original_path.endswith('.wasm'):
                    self.send_header('Content-Type', 'application/wasm')
                elif original_path.endswith('.js'):
                    self.send_header('Content-Type', 'application/javascript')
                elif original_path.endswith('.data'):
                    self.send_header('Content-Type', 'application/octet-stream')
                else:
                    self.send_header('Content-Type', 'application/octet-stream')
                
                self.send_header('Content-Length', str(len(decompressed_data)))
                self.send_header('Cache-Control', 'no-cache')
                self.end_headers()
                
                # Send the decompressed data
                self.wfile.write(decompressed_data)
                return
                
            except Exception as e:
                print(f"Error decompressing {path}: {e}")
                self.send_error(500, f"Error decompressing file: {e}")
                return
        
        # Check if it's a .gz file
        elif self.path.endswith('.gz') and os.path.exists(path):
            try:
                # Read and decompress the gzip file
                with gzip.open(path, 'rb') as f:
                    decompressed_data = f.read()
                
                # Send response
                self.send_response(200)
                
                # Set appropriate content type based on the original file
                original_path = self.path[:-3]  # Remove .gz extension
                if original_path.endswith('.wasm'):
                    self.send_header('Content-Type', 'application/wasm')
                elif original_path.endswith('.js'):
                    self.send_header('Content-Type', 'application/javascript')
                elif original_path.endswith('.data'):
                    self.send_header('Content-Type', 'application/octet-stream')
                else:
                    self.send_header('Content-Type', 'application/octet-stream')
                
                self.send_header('Content-Length', str(len(decompressed_data)))
                self.send_header('Cache-Control', 'no-cache')
                self.end_headers()
                
                # Send the decompressed data
                self.wfile.write(decompressed_data)
                return
                
            except Exception as e:
                print(f"Error decompressing {path}: {e}")
                self.send_error(500, f"Error decompressing file: {e}")
                return
        
        # For all other files, use the default handler
        super().do_GET()

PORT = 8000
Handler = UnityWebGLHandler

print(f"Starting Unity WebGL server on port {PORT}")
print(f"Server will decompress .br and .gz files automatically")
print(f"Open http://localhost:{PORT} in your browser")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.") 